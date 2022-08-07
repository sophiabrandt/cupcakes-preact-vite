import { describe, expect, it } from 'vitest'
import { makeFakeCupcake } from '../../__test__/fixtures/cupcake'
import { makeCupcake } from './index'

describe('Cupcake', () => {
  it('has a valid id', () => {
    const cupcakeWithValidId = makeFakeCupcake()
    expect(() => makeCupcake(cupcakeWithValidId)).not.toThrow()

    const cupcakeWithInvalidID = makeFakeCupcake({ id: 'invalid' })
    expect(() => makeCupcake(cupcakeWithInvalidID)).toThrowError('Invalid id.')
  })

  it('has a valid title', () => {
    const cupcakeWithValidName = makeFakeCupcake()
    expect(() => makeCupcake(cupcakeWithValidName)).not.toThrow()

    const cupcakeWithNoName = makeFakeCupcake({ name: undefined })
    expect(() => makeCupcake(cupcakeWithNoName)).toThrowError(
      'Name is required'
    )

    const cupcakeWithInvalidName = makeFakeCupcake({ name: 'a' })
    expect(() => makeCupcake(cupcakeWithInvalidName)).toThrowError(
      'Name must be at least 2 characters long.'
    )
  })
})
