<script lang="ts" setup>
withDefaults(defineProps<{
  question: string
  description: string
}>(), {
  question: 'Poll question',
  description: 'Poll description'
})
</script>

<template>
  <UCard class="w-full p-2 border border-gray-10 rounded-xl flex flex-col justify-center">
    <template #header>
      <h2>{{ question }}</h2>
    </template>
    <p>{{ description }}</p>
  </UCard>
</template>

<style scoped>

</style>
