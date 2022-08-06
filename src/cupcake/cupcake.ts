import { Id } from '../Id/index'
import { InvalidPropertyError } from '../utils/errors'

interface ICupcakeInfo {
  id: string
}

interface IBuildMakeCupcake {
  Id: typeof Id
  InvalidPropertyError: typeof InvalidPropertyError
}

export const buildMakeCupcake = ({
  Id,
  InvalidPropertyError,
}: IBuildMakeCupcake) => {
  return (cupcakeInfo: ICupcakeInfo) => {
    const validateId = (id: string) => {
      if (!Id.isValidId(id)) {
        throw new InvalidPropertyError('Invalid id.')
      }
    }

    const validate = ({ id } = { id: Id.makeId() }) => {
      validateId(id)
      return Object.freeze({
        id,
      })
    }

    const validCupcake = validate(cupcakeInfo)

    return Object.freeze({
      getId: () => validCupcake.id,
    })
  }
}
