import { Coupon, InputCoupon } from '../../../src/domain/entities/coupon'

type OutputMakeSUT = {
  sut: Coupon
}

const makeSUT = (params: InputCoupon): OutputMakeSUT => {
  const sut = new Coupon({ ...params })

  return {
    sut
  }
}

describe('Coupon Entity Unit Tests', () => {
  let params = {
    name: 'any_name',
    storeId: 'any_store',
    image: 'any_image',
    oldPrice: 'any_oldPrice',
    price: 'any_price',
    type: 'any_type'
  }

  it('should garantee Coupon entity recieves all required parameters', () => {
    expect(() => {
      const coupon = makeSUT({ ...params, name: '' })
    }).toThrowError('Name is required')

    expect(() => {
      const coupon = makeSUT({ ...params, storeId: '' })
    }).toThrowError('Store id is required')

    expect(() => {
      const coupon = makeSUT({ ...params, image: '' })
    }).toThrowError('Image is required')

    expect(() => {
      const coupon = makeSUT({ ...params, type: '' })
    }).toThrowError('Type is required')
  })

  it('should garantee a offer type coupon recieves current price as a parameter', () => {
    expect(() => {
      const coupon = makeSUT({ ...params, type: 'offer', currentPrice: '' })
    }).toThrowError('Price is required for a offer type')
  })
})
