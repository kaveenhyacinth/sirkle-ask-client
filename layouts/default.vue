<script lang="ts" setup>
import { MAX_ALLOWED_SCREEN_WIDTH } from '~/utils'

const { width: screenWidth } = useWindowSize()

const isMobile = computed(() => screenWidth.value < MAX_ALLOWED_SCREEN_WIDTH)
</script>

<template>
  <div v-if="isMobile">
    <Navbar />
    <slot />
  </div>
  <div v-else>
    <NotSupported />
  </div>
</template>

<style scoped>

</style>
