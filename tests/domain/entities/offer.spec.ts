import { Offer } from '../../../src/domain/entities/offer'

describe('Offer Entity Unit Tests', () => {
  let params = {
    name: 'any_name',
    link: 'any_link',
    image: 'any_image',
    price: 'any_price',
    oldPrice: 'any_oldPrice',
    discount: 'any_discount',
    storeId: 'any_storeId'
  }

  it('should garantee Offer entity recieves all required parameters', () => {
    expect(() => {
      const mock = new Offer({ ...params, name: '' })
    }).toThrowError('Offer name is required')
    expect(() => {
      const mock = new Offer({ ...params, link: '' })
    }).toThrowError('Offer link is required')
    expect(() => {
      const mock = new Offer({ ...params, image: '' })
    }).toThrowError('Offer image is required')
    expect(() => {
      const mock = new Offer({ ...params, price: '' })
    }).toThrowError('Offer price is required')
    expect(() => {
      const mock = new Offer({ ...params, storeId: '' })
    }).toThrowError('Offer store id is required')
  })
})
