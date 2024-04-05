import HttpFactory from '~/api/factory'
import type { IVoteContract } from '~/types/api.types'

class VoteModule extends HttpFactory {
  private RESOURCE = '/votes'

  async submitVote (data: IVoteContract) {
    return await this.post(`${this.RESOURCE}`, data)
  }
}

export default VoteModule
