import { RequiredParameterError } from './errors'

export const requiredParam = (param: string) => {
  throw new RequiredParameterError(param)
}
