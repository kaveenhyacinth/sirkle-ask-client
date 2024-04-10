<script lang="ts" setup>
const props = withDefaults(defineProps<{
  question: string
  description: string
  votes: number,
  createdAt: string
}>(), {
  question: 'Poll question',
  description: 'Poll description',
  votes: 0,
  createdAt: undefined
})

const createdAgo = useTimeAgo(new Date(props.createdAt))

</script>

<template>
  <UCard class="w-full p-1 border border-gray-10 rounded-xl flex flex-col justify-center">
    <div class="w-full flex justify-between items-start">
      <h2 class="text-md font-semibold flex-1">
        {{ question }}
      </h2>
      <h3 class="text-sm font-semibold">
        {{ pluralizeNumber(props.votes, 'Vote') }}
      </h3>
    </div>
    <div class="w-full flex justify-between items-end">
      <p class="flex-1 text-gray-400">
        {{ description.substring(0, 32) + '...' }}
      </p>
      <p class="text-sm text-gray-400">
        {{ createdAgo }}
      </p>
    </div>
  </UCard>
</template>

<style scoped>

</style>
