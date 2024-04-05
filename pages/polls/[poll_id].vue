<script lang="ts" setup>
import PollChart from '~/features/poll/PollChart.vue'

const route = useRoute()
const { onSuccess, onError } = useNotification()

const isBusy = ref({
  submitVote: false
})
const silentRefresh = ref(false)
const selectedVote = ref<string>()
const isSubmitVoteModalOpen = ref(false)

const pollId = computed<string>(() => route.params?.poll_id as string)

const { data, refresh: originalRefresh, pending } = useAsyncData(`poll:${pollId}`, async () => {
  if (!pollId.value) {
    return
  }
  const response = await useApi().pollModule.getPollById(pollId.value)
  return {
    poll: response.data
  }
}, {
  watch: [pollId]
})

const refresh = async (...args: any[]) => {
  silentRefresh.value = true // Indicate this is a refresh, not a route change
  await originalRefresh(...args)
}

const timeAgo = useTimeAgo(new Date(data?.value?.poll?.expiresAt as string))

const shouldShowSpinner = computed(() => pending.value && !silentRefresh.value)
const submitButtonOptions = computed(() => ({
  text: 'Submit',
  loadingText: 'Submitting...'
}))

const onSubmitVote = async (optionId?: string) => {
  isSubmitVoteModalOpen.value = false
  isBusy.value.submitVote = true

  if (!optionId) {
    onError({ description: 'Please select an option first.' })
    return
  }

  try {
    await useApi().voteModule.submitVote({ poll: pollId.value, option: optionId })
    selectedVote.value = undefined
    await refresh()
    onSuccess({ description: 'Vote submitted successfully!' })
  } catch (error: any) {
    onError({ description: error?.response?._data?.message ?? 'Something went wrong!' })
  } finally {
    silentRefresh.value = false
    isBusy.value.submitVote = false
  }
}

const formatDate = (date: string | Date) => {
  date = new Date(date)
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(date).split(' ').join('-')
}

watch(pollId, (newValue, oldValue) => {
  silentRefresh.value = newValue !== oldValue
})

onBeforeUnmount(() => {
  selectedVote.value = undefined
})

</script>

<template>
  <LoadSpinner v-if="shouldShowSpinner" />
  <div v-else class="mt-2">
    <h1 class="font-semibold text-2xl text-eire-black mb-2">
      {{ data?.poll?.question }}
    </h1>
    <p class="text-md text-gray-600">
      {{ data?.poll?.description }}
    </p>

    <div class="my-4 p-2 border border-gray-300 rounded-xl flex items-center">
      <div class="info__card border-r border-gray-300">
        <p class="text-lg font-medium">
          {{ pluralizeNumber(data?.poll.votes, 'Vote') }}
        </p>
      </div>
      <div class="info__card">
        <p class="text-sm">
          Expires {{ timeAgo }}
        </p>
        <p class="text-sm text-gray-500">
          ({{ formatDate(data?.poll?.expiresAt) }})
        </p>
      </div>
    </div>

    <PollChart v-model:selected-vote="selectedVote" :poll="data?.poll" />

    <div class="mt-4">
      <UButton
        :disabled="!selectedVote || isBusy.submitVote"
        :label="submitButtonOptions[isBusy.submitVote ? 'loadingText' : 'text']"
        block
        class="h-10"
        color="primary"
        size="md"
        variant="solid"
        @click="isSubmitVoteModalOpen = true"
      />
    </div>

    <LazyUModal v-model="isSubmitVoteModalOpen">
      <div class="p-4 flex flex-col justify-center gap-2">
        <h2 class="font-semibold text-xl text-center">
          Submit your vote!
        </h2>
        <p class="text-gray-600 mt-2">
          You are about to submit your vote. Are you sure you want to proceed?
        </p>
        <div class="flex flex-col gap-2 md:flex-row md:justify-end">
          <UButton
            class="action__button"
            color="gray"
            label="Cancel"
            size="md"
            variant="solid"
            @click="isSubmitVoteModalOpen = false"
          />
          <UButton
            :disabled="!selectedVote || isBusy.submitVote"
            class="action__button"
            color="primary"
            label="Submit"
            size="md"
            variant="solid"
            @click="onSubmitVote(selectedVote)"
          />
        </div>
      </div>
    </LazyUModal>
  </div>
</template>

<style scoped>
.info__card {
  @apply flex-1 flex flex-col items-center justify-center;
}

.action__button {
  & :deep(span) {
    @apply w-full text-center;
  }
}
</style>
