import { STORAGE_KEYS } from '~/types/storage.types'

export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = storeToRefs(useAuthStore())
  const token = useCookie(STORAGE_KEYS.ACCESS_TOKEN)

  if (token.value) {
    isAuthenticated.value = true
  }

  if (!to?.meta?.public && !token.value) {
    return navigateTo(`/auth/login?redirect=${to.path}`)
  }

  if (token.value && ['/auth/login', '/auth/register'].includes(to.path)) {
    return navigateTo('/')
  }
})
