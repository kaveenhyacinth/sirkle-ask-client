<script lang="ts" setup>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import PollChart from '~/features/poll/PollChart.vue'

dayjs.extend(relativeTime)

const route = useRoute()

const isExpired = ref(false)

const voteId = computed<string>(() => route.params?.vote_id as string)

const { data, pending } = useAsyncData(`vote:${voteId}`, async () => {
  if (!voteId.value) {
    return
  }
  const response = await useApi().voteModule.getVoteById(voteId.value)

  const now = dayjs()
  const expiresAt = dayjs(response?.data?.poll?.expiresAt)
  isExpired.value = !expiresAt?.isAfter(now)

  return {
    vote: response.data
  }
}, {
  watch: [voteId]
})

const vote = computed(() => data?.value?.vote)
const poll = computed(() => data?.value?.vote?.poll)

const timeUntilEvent = computed(() => {
  const now = dayjs()
  const expiresAt = dayjs(poll.value?.expiresAt)
  if (expiresAt?.isAfter(now)) {
    return 'Expires in ' + expiresAt.from(now, true)
  }
  return 'Expired'
})

const formatDate = (date?: string | Date) => {
  const dateObj = dayjs(date)
  if (!dateObj.isValid()) {
    return
  }
  return dateObj.format('DD MMM YYYY')
}

</script>

<template>
  <div class="mt-2">
    <LoadSpinner v-if="pending">
      Loading votes...
    </LoadSpinner>
    <h1 class="font-semibold text-2xl text-eire-black mb-2">
      {{ poll?.question }}
    </h1>
    <p class="text-md text-gray-600">
      {{ poll?.description }}
    </p>

    <div class="my-4 p-2 border border-gray-300 rounded-xl flex items-center">
      <div class="info__card border-r border-gray-300">
        <p class="text-lg font-medium">
          {{ pluralizeNumber(poll?.votes, 'Vote') }}
        </p>
      </div>
      <div class="info__card">
        <p :class="{'text-red-500': isExpired}" class="text-sm">
          {{ timeUntilEvent }}
        </p>
        <p v-if="!isExpired" class="text-sm text-gray-500">
          ({{ formatDate(poll?.expiresAt) }})
        </p>
      </div>
    </div>

    <PollChart :is-expired="isExpired" :my-option="vote?.option" :poll="poll" />
  </div>
</template>

<style scoped>
.info__card {
  @apply flex-1 flex flex-col items-center justify-center;
}
</style>
