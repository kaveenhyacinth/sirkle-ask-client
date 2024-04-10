import HttpFactory from '../factory'
import type { IApiSuccessResponse, IPoll, IPollContract } from '~/types/api.types'

class PollModule extends HttpFactory {
  private RESOURCE = '/polls'

  async getPolls (): Promise<IApiSuccessResponse<Omit<IPoll, 'options'>[]>> {
    return await this.get(`${this.RESOURCE}`, undefined, { noAuth: true })
  }

  async getPollById (id: string): Promise<IApiSuccessResponse<IPoll>> {
    return await this.get(`${this.RESOURCE}/${id}`)
  }

  async createPoll (payload: IPollContract): Promise<IApiSuccessResponse<IPoll>> {
    return await this.post(`${this.RESOURCE}`, payload)
  }
}

export default PollModule
