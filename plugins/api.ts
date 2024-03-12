import { type FetchOptions } from 'ofetch'
import PollModule from '~/api/modules/poll'

interface IApiInstance {
	pollModule: PollModule
}

export default defineNuxtPlugin((nuxtApp) => {
  const fetchOptions: FetchOptions = {
    baseURL: nuxtApp.$config.public.API_BASE_URL as string
  }

  const apiFetcher = $fetch.create(fetchOptions)

  const modules: IApiInstance = {
    pollModule: new PollModule(apiFetcher)
  }

  return {
    provide: {
      api: modules
    }
  }
})
