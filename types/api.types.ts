export interface IApiSuccessResponse<T> {
  readonly data: T;
  readonly meta: any
}

export interface IApiErrorResponse {
  readonly error: string;
  readonly message: string;
  readonly statusCode: number;
}

export interface LoginContract {
  readonly email: string;
  readonly password: string;
}

export interface RegisterContract extends LoginContract {
  readonly username: string;
}

export interface ICommon {
  '_id': string;
  createdAt: string;
  updatedAt: string;
}

export interface IPoll extends ICommon {
  question: string;
  description?: string;
  options: { _id: string, value: string, votes: number }[];
  author: { _id: string, username: string, email: string };
  isPrivate: boolean;
  expiresAt: string;
  status: 'active' | 'expired' | 'deleted';
  votes: number;
}

export interface IPollContract extends Pick<IPoll, 'question' | 'description'>{
  options: {value: string }[];
}

export interface IVoteContract {
  poll: string;
  option: string;
}
