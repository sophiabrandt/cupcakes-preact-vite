import { faker } from '@faker-js/faker'
import { Id } from '../../src/Id'

interface IMakeFakeCupcake {
  id?: string
  name?: string
}

export const makeFakeCupcake = (overrides?: IMakeFakeCupcake) => {
  const cupcake = {
    id: Id.makeId(),
    name: faker.commerce.productName(),
  }
  return {
    ...cupcake,
    ...overrides,
  }
}
