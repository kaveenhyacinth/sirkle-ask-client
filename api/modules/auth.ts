import HttpFactory from '~/api/factory'
import type { LoginDto, RegisterDto } from '~/types/api.types'

class AuthModule extends HttpFactory {
  private RESOURCE = '/auth'

  async register (registerDto: RegisterDto): Promise<{ token: string }> {
    return await this.post(`${this.RESOURCE}/register`, registerDto)
  }

  async login (loginDto: LoginDto): Promise<{ token: string }> {
    return await this.post(`${this.RESOURCE}/login`, loginDto)
  }
}

export default AuthModule
