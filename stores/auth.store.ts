import type { LoginContract, RegisterContract } from '~/types/api.types'
import { STORAGE_KEYS } from '~/types/storage.types'

export const useAuthStore = defineStore('sirkl/auth', () => {
  const isAuthenticated = ref(false)

  const api = useApi()
  const { onError, onSuccess } = useNotification()

  const setToken = (value: string) => {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, value)
    const token = useCookie(STORAGE_KEYS.ACCESS_TOKEN)
    token.value = value
  }

  const removeToken = () => {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN)
    const token = useCookie(STORAGE_KEYS.ACCESS_TOKEN)
    token.value = null
  }

  const login = async (loginDto: LoginContract) => {
    try {
      const res = await api.authModule.login(loginDto)
      isAuthenticated.value = true
      setToken(res.token)
    } catch (error: any) {
      onError({
        title: 'Login failed',
        description: error?.response?._data?.message
      })
    }
  }

  const register = async (registerDto: RegisterContract) => {
    try {
      const res = await api.authModule.register(registerDto)
      isAuthenticated.value = true
      setToken(res.token)
      onSuccess({
        title: 'Register success',
        description: 'You have successfully registered'
      })
    } catch (error: any) {
      onError({
        title: 'Register failed',
        description: error?.response?._data?.message
      })
    }
  }

  const logout = () => {
    isAuthenticated.value = false
    removeToken()
  }

  return {
    isAuthenticated,
    login,
    register,
    logout
  }
})
