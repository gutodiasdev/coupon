import { Category, InputCategory } from '../../../src/domain/entities/category'

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
