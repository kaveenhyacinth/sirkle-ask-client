export interface LoginDto {
  readonly email: string;
  readonly password: string;
}

export interface RegisterDto extends LoginDto {
  readonly username: string;
}

export interface IApiErrorResponse {
  readonly error: string;
  readonly message: string;
  readonly statusCode: number;
}
