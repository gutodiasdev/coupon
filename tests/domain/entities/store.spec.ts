import { InputStore, Store } from '../../../src/domain/entities/store'

const makeSUT = (params: InputStore) => {
  const sut = new Store(params)
  return {
    sut
  }
}

describe('Store Entity Unit Tests', () => {
  let params = {
    name: 'any_name',
    image: 'any_image',
    link: 'any_link'
  }

  it('should garantee Store entity is recieves all required parameters', () => {
    expect(() => {
      const sut = makeSUT({ ...params, name: '' })
    }).toThrowError('Store name is required')

    expect(() => {
      const sut = makeSUT({ ...params, link: '' })
    }).toThrowError('Store link is required')
  })

  it('should garantee Store entity will recieve a default image if not given in the constructor', () => {
    const { sut } = makeSUT({ ...params, image: '' })

    expect(sut.image).toBe('default_image')
  })
})
