import { type FetchOptions } from 'ofetch'
import { STORAGE_KEYS } from '~/types/storage.types'
import PollModule from '~/api/modules/poll'
import AuthModule from '~/api/modules/auth'
import VoteModule from '~/api/modules/vote'

interface IApiInstance {
  pollModule: PollModule
  authModule: AuthModule
  voteModule: VoteModule
}

export default defineNuxtPlugin((nuxtApp) => {
  const accessToken = useCookie(STORAGE_KEYS.ACCESS_TOKEN)

  const fetchOptions: FetchOptions = {
    baseURL: nuxtApp.$config.public.API_BASE_URL as string,
    headers: {
      ...(accessToken
        ? {
            Authorization: `Bearer ${accessToken.value}`
          }
        : {})
    }
  }

  const apiFetcher = $fetch.create(fetchOptions)

  const modules: IApiInstance = {
    pollModule: new PollModule(apiFetcher),
    authModule: new AuthModule(apiFetcher),
    voteModule: new VoteModule(apiFetcher)
  }

  return {
    provide: {
      api: modules
    }
  }
})
