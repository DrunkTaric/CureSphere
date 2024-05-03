type Stringified<T> = {
  [P in keyof T]: string
}

export interface ServerResponse<T> {
  error: boolean
  error_message: string
  data: T
}

export interface ServerRequest {
  session?: string
}

export interface UpdateRequest<T> extends ServerRequest {
  id: string | number
  data: Stringified<T>
}

export interface DeleteRequest extends ServerRequest {
  id: string | number
}

export interface CreateRequest<T> extends ServerRequest {
  data: Stringified<T>
}

export interface GetRequest<T> extends ServerRequest {
  data: Stringified<Partial<T>>
}
