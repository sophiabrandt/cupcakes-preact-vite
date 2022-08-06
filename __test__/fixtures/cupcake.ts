import { Id } from '../../src/Id'

interface IMakeFakeCupcake {
  id?: string
}

export const makeFakeCupcake = (overrides?: IMakeFakeCupcake) => {
  const cupcake = {
    id: Id.makeId(),
  }
  return {
    ...cupcake,
    ...overrides,
  }
}
