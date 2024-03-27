import { type FetchOptions } from 'ofetch'
import PollModule from '~/api/modules/poll'
import AuthModule from '~/api/modules/auth'

interface IApiInstance {
  pollModule: PollModule
  authModule: AuthModule
}

export default defineNuxtPlugin((nuxtApp) => {
  const fetchOptions: FetchOptions = {
    baseURL: nuxtApp.$config.public.API_BASE_URL as string
  }

  const apiFetcher = $fetch.create(fetchOptions)

  const modules: IApiInstance = {
    pollModule: new PollModule(apiFetcher),
    authModule: new AuthModule(apiFetcher)
  }

  return {
    provide: {
      api: modules
    }
  }
})
