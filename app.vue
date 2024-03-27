<script lang="ts" setup>
import { REDIRECT_FROM_WHITELIST } from '#imports'

const { width: screenWidth } = useWindowSize()
const route = useRoute()
const { isAuthenticated } = storeToRefs(useAuthStore())

const isMobile = ref(false)
const isAppReady = ref(false)

onNuxtReady(() => {
  isAppReady.value = true
})

watchEffect(() => {
  isMobile.value = screenWidth.value <= MAX_ALLOWED_SCREEN_WIDTH
})

watch(isAuthenticated, (value, oldValue) => {
  if (!oldValue && value) {
    if ('redirect' in route.query && REDIRECT_FROM_WHITELIST.includes(route.path)) {
      navigateTo(route.query.redirect as string)
    } else {
      navigateTo('/')
    }
  }
  if (oldValue && !value && route.path !== '/') {
    navigateTo('/auth/login')
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <NotSupported v-if="!isMobile && isAppReady" />
    <UNotifications />
  </NuxtLayout>
</template>
