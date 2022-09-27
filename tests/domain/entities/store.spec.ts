interface InputStore {
  name: string
  image: string
  link: string
}

export class Store {
  private _name: string
  private _image: string
  private _link: string

  constructor (params: InputStore) {
    this._name = params.name
    this._image = params.image
    this._link = params.link
    this.validate()
  }

  private validate (): void {
    if (this._name.length === 0) {
      throw new Error('Store name is required')
    }

    if (this._link.length === 0) {
      throw new Error('Store link is required')
    }

    if (this._image.length === 0) {
      this._image = 'default_image'
    }
  }

  get image (): string {
    return this._image
  }
}

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
