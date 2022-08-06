import { Id } from '../Id/index'
import { InvalidPropertyError } from '../utils/errors'
import { buildMakeCupcake } from './cupcake'

export const makeCupcake = buildMakeCupcake({
  Id,
  InvalidPropertyError,
})
