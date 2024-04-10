<script lang="ts" setup>
import PollCard from '~/features/poll/PollCard.vue'

const breadcrumb = useBreadcrumb('my-polls')

const { data } = useAsyncData('poll:my', async () => {
  const response = await useApi().pollModule.getPollsByUser()
  return {
    polls: response.data
  }
})

// const page = ref(1)
</script>

<template>
  <div class="w-full h-full pb-6 flex flex-col">
    <section>
      <Breadcrumb :links="breadcrumb" />
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
          label="Create poll"
          size="md"
          to="/polls/new"
          variant="solid"
        />
      </div>
    </section>
    <section class="flex-1">
      <div class="mt-6 flex flex-col gap-3">
        <PollCard
          v-for="poll in data?.polls"
          :key="poll?._id"
          :created-at="poll?.createdAt"
          :description="poll?.description"
          :question="poll?.question"
          :votes="poll?.votes"
          @click="() => $router.push(`/polls/${poll?._id}`)"
        />
      </div>
    </section>
    <!--    <section>-->
    <!--      <div v-if="data?.polls?.length" class="mt-6 flex justify-center">-->
    <!--        <UPagination-->
    <!--          v-model="page"-->
    <!--          :max="5"-->
    <!--          :page-count="5"-->
    <!--          :total="data?.polls?.length"-->
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
