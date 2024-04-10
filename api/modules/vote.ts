import HttpFactory from '~/api/factory'
import type { IApiSuccessResponse, IVote, IVoteContract, IVoteResult } from '~/types/api.types'

class VoteModule extends HttpFactory {
  private RESOURCE = '/votes'

  async getVotesByUser (): Promise<IApiSuccessResponse<IVote[]>> {
    return await this.get(`${this.RESOURCE}/my`)
  }

  async getVoteById (id: string): Promise<IApiSuccessResponse<IVoteResult>> {
    return await this.get(`${this.RESOURCE}/${id}`)
  }

  async submitVote (data: IVoteContract) {
    return await this.post(`${this.RESOURCE}`, data)
  }
}

export default VoteModule
