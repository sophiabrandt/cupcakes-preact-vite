import { describe, expect, it } from 'vitest'
import { makeFakeCupcake } from '../../__test__/fixtures/cupcake'
import { makeCupcake } from './index'

describe('Cupcake', () => {
  it('has a valid id', () => {
    const validId = makeFakeCupcake()
    expect(() => makeCupcake(validId)).not.toThrow()
    const invalidId = makeFakeCupcake({ id: 'invalid' })
    expect(() => makeCupcake(invalidId)).toThrowError('Invalid id.')
  })
})
