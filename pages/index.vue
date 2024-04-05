<script lang="ts" setup>

import PollCard from '~/features/poll/PollCard.vue'

definePageMeta({
  public: true
})

const { data } = useAsyncData('poll:all', async () => {
  const response = await useApi().pollModule.getPolls()
  return {
    polls: response.data
  }
})
</script>

<template>
  <div class="w-full h-full pb-6 flex flex-col">
    <section>
      <div class="flex justify-between items-center mt-1">
        <h1 class="text-2xl font-bold">
          Public Polls
        </h1>
        <UButton
          :trailing="false"
          color="primary"
          icon="mdi:lightning-bolt"
          label="Create a poll"
          size="md"
          to="/polls/new"
          variant="solid"
        />
      </div>
    </section>
    <section>
      <div class="w-full mt-6">
        <UInput
          :trailing="false"
          class="flex-1"
          color="white"
          icon="i-heroicons-magnifying-glass-20-solid"
          placeholder="Search..."
          size="md"
        />
      </div>
    </section>
    <section class="flex-1">
      <div class="mt-6 flex flex-col gap-3">
        <PollCard
          v-for="poll in data?.polls"
          :key="poll?.id"
          :created-at="poll?.createdAt"
          :description="poll?.description"
          :question="poll?.question"
          :votes="poll?.votes"
          @click="() => $router.push(`/polls/${poll?._id}`)"
        />
      </div>
    </section>
    <section>
      <NuxtLoadingIndicator />
    </section>
  </div>
</template>

<style scoped>

</style>
