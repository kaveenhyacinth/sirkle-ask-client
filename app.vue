<script lang="ts" setup>
const { width: screenWidth } = useWindowSize()

const isMobile = ref(false)
const isAppReady = ref(false)

onNuxtReady(() => {
  isAppReady.value = true
})

watchEffect(() => {
  isMobile.value = screenWidth.value <= MAX_ALLOWED_SCREEN_WIDTH
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <NotSupported v-if="!isMobile && isAppReady" />
    <UNotifications />
  </NuxtLayout>
</template>
