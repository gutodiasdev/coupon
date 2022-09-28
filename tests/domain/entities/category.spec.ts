interface InputCategory {
  name: string
}

export class Category {
  private _name: string

  constructor (params: InputCategory) {
    this._name = params.name
    this.validate()
  }

  private validate (): void {
    if (this._name.length === 0) {
      throw new Error('Category name is required')
    }
  }
}

interface OutputMakeSUT {
  sut: Category
}

const makeSUT = (params: InputCategory): OutputMakeSUT => {
  const sut = new Category(params)

  return { sut }
}

describe('Category Unit Tests', () => {
  it('should garantee Category entity recieves correct parameters', () => {
    expect(() => { const category = makeSUT({ name: '' }) }).toThrowError('Category name is required')
  })
})
