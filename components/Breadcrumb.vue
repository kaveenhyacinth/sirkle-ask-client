<script lang="ts" setup>
import type { BreadcrumbLink } from '#ui/types'

defineProps<{
  links: BreadcrumbLink[]
}>()
</script>

<template>
  <div class="h-10 w-full flex items-center bg-gray-50 px-2 rounded-xl overflow-x-scroll overflow-y-hidden">
    <UBreadcrumb :links="links" divider="/" />
  </div>
</template>

<style scoped>

</style>
