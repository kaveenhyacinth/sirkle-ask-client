<script lang="ts" setup>
import { breadcrumbSchema } from '~/utils/navigation'
import PollCard from '~/features/poll/PollCard.vue'

// const page = ref(1)
// const items = ref(Array(10))

const { data } = useAsyncData('vote:my', async () => {
  const response = await useApi().voteModule.getVotesByUser()
  return {
    votes: response.data
  }
})
</script>

<template>
  <div class="w-full h-full pb-6 flex flex-col">
    <section>
      <Breadcrumb :links="breadcrumbSchema['my-votes']" />
    </section>
    <section>
      <div class="w-full flex justify-between gap-4 mt-4">
        <UInput
          :trailing="false"
          class="flex-1"
          color="white"
          icon="i-heroicons-magnifying-glass-20-solid"
          placeholder="Search..."
          size="md"
        />
        <UButton
          :trailing="false"
          color="primary"
          icon="mdi:plus"
          label="Find more"
          size="md"
          to="/"
          variant="solid"
        />
      </div>
    </section>
    <section class="flex-1">
      <div class="mt-6 flex flex-col gap-3">
        <PollCard
          v-for="item in data?.votes"
          :key="item?._id"
          :created-at="item?.poll?.createdAt"
          :description="item?.poll?.description"
          :question="item?.poll?.question"
          :votes="item?.poll?.votes"
          @click="() => $router.push(`/votes/${item?._id}`)"
        />
      </div>
    </section>
    <!--    <section>-->
    <!--      <div v-if="items.length" class="mt-6 flex justify-center">-->
    <!--        <UPagination-->
    <!--          v-model="page"-->
    <!--          :max="5"-->
    <!--          :page-count="5"-->
    <!--          :total="items.length"-->
    <!--          show-first-->
    <!--          show-last-->
    <!--          size="md"-->
    <!--        />-->
    <!--      </div>-->
    <!--    </section>-->
  </div>
</template>

<style scoped>

</style>
