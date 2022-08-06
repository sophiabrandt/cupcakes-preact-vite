import { nanoid } from 'nanoid'

// eslint-disable-next-line jest/no-export
export const Id = Object.freeze({
  makeId: nanoid,
  isValidId: (id: string) => /(\w|-){21}/.test(id),
})

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest
  describe('Id', () => {
    it('checks for a valid id', () => {
      const validId = Id.makeId()
      expect(Id.isValidId(validId)).toBe(true)
      const invalidId = 'not a valid id'
      expect(Id.isValidId(invalidId)).toBe(false)
    })
  })
}
