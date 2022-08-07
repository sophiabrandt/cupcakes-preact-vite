export class InvalidPropertyError extends Error {
  constructor(msg: string) {
    super(msg)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidPropertyError)
    }
  }
}

export class RequiredParameterError extends Error {
  constructor(param: string) {
    super(`${param} is required.`)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RequiredParameterError)
    }
  }
}
