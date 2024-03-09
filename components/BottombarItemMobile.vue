<script lang="ts" setup>
defineProps<{
  path: string
}>()
</script>

<template>
  <nuxt-link :to="`${path}`" class="flex-1 flex justify-center items-center" tag="div">
    <slot />
  </nuxt-link>
</template>

<style lang="scss">
.nuxt-icon {
  svg {
    width: 24px !important;
    height: 24px !important;
  }
}
</style>
