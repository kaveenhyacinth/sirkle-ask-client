import HttpFactory from '~/api/factory'
import type { LoginContract, RegisterContract } from '~/types/api.types'

class AuthModule extends HttpFactory {
  private RESOURCE = '/auth'

  async register (registerDto: RegisterContract): Promise<{ token: string }> {
    return await this.post(`${this.RESOURCE}/register`, registerDto)
  }

  async login (loginDto: LoginContract): Promise<{ token: string }> {
    return await this.post(`${this.RESOURCE}/login`, loginDto)
  }
}

export default AuthModule
