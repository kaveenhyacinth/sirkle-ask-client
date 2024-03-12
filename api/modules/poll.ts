import HttpFactory from '../factory'

class PollModule extends HttpFactory {
  private RESOURCE = '/polls'

  async getPolls (): Promise<any> {
    return await this.get(`${this.RESOURCE}`)
  }
}

export default PollModule
