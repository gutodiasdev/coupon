import { prismaMock } from '../../../src/infra/db/prisma/singleton'
import { createOffer } from '../../../src/main/config/prisma/offer-functions'

describe('', () => {
  let params = {
    id: 'any_id',
    name: 'any_name',
    link: 'any_link',
    image: 'any_image',
    price: 'any_price',
    oldPrice: 'any_oldPrice',
    discount: 'any_discount',
    store_id: 'any_storeId',
    is_verified: false,
  }

  it('should create a offer', async () => {
    prismaMock.offer.create.mockResolvedValue(params)

    await expect(createOffer(params)).resolves.toEqual({
      id: 'any_id',
      name: 'any_name',
      link: 'any_link',
      image: 'any_image',
      price: 'any_price',
      oldPrice: 'any_oldPrice',
      discount: 'any_discount',
      store_id: 'any_storeId',
      is_verified: false,
    })
  })
})
