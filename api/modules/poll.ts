import HttpFactory from '../factory'
import type { IApiSuccessResponse, IPoll } from '~/types/api.types'

class PollModule extends HttpFactory {
  private RESOURCE = '/polls'

  async getPolls (): Promise<IApiSuccessResponse<Omit<IPoll, 'options'>[]>> {
    return await this.get(`${this.RESOURCE}`, undefined, { noAuth: true })
  }

  async getPollById (id: string): Promise<IApiSuccessResponse<IPoll>> {
    return await this.get(`${this.RESOURCE}/${id}`)
  }
}

export default PollModule
