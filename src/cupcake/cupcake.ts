import { Id } from '../Id/index'
import { InvalidPropertyError } from '../utils/errors'
import { requiredParam } from '../utils/required-param'

interface ICupcakeInfo {
  id: string
  name: string
}

interface IBuildMakeCupcake {
  Id: typeof Id
  InvalidPropertyError: typeof InvalidPropertyError
  requiredParam: typeof requiredParam
}

export const buildMakeCupcake = ({
  Id,
  InvalidPropertyError,
  requiredParam,
}: IBuildMakeCupcake) => {
  return (cupcakeInfo: ICupcakeInfo) => {
    const validateId = (id: string) => {
      if (!Id.isValidId(id)) {
        throw new InvalidPropertyError('Invalid id.')
      }
    }

    const validateName = (name: string) => {
      if (name.length < 2) {
        throw new InvalidPropertyError(
          'Name must be at least 2 characters long.'
        )
      }
    }

    const validate = ({
      id = Id.makeId(),
      name = requiredParam('Name'),
    }: {
      id: string
      name: string
    }) => {
      validateId(id)
      validateName(name.trim())

      return Object.freeze({
        id,
        name,
      })
    }

    const validCupcake = validate(cupcakeInfo)

    return Object.freeze({
      getId: () => validCupcake.id,
      getName: () => validCupcake.name,
    })
  }
}
