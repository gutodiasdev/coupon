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
    link: 'any_link',
    image: 'any_image',
    description: 'any_description',
    expiration_date: 'any_expiration_date',
    discount: 'any_discount'
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
      const coupon = makeSUT({ ...params, link: '' })
    }).toThrowError('Link is required')

    expect(() => {
      const coupon = makeSUT({ ...params, expiration_date: '' })
    }).toThrowError('Expiration date is required')
  })
})
