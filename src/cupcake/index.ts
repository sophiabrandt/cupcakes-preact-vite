import { Id } from '../Id/index'
import { InvalidPropertyError } from '../utils/errors'
import { requiredParam } from '../utils/required-param'
import { buildMakeCupcake } from './cupcake'

export const makeCupcake = buildMakeCupcake({
  Id,
  InvalidPropertyError,
  requiredParam,
})
