<script lang="ts" setup>
withDefaults(defineProps<{
  path: string
  pathName: string
}>(), {
  path: '/',
  pathName: 'Home'
})

const emits = defineEmits<{(e: 'toggleSidebar'): void }>()
</script>

<template>
  <li class="h-10 flex items-center">
    <nuxt-link :to="path" @click="emits('toggleSidebar')">
      {{ pathName }}
    </nuxt-link>
  </li>
</template>

<style scoped>

</style>
