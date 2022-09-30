import { prismaMock } from '../../../src/infra/db/prisma/singleton'
import { create, deleteCoupon, list, listFromStore, update } from '../../../src/main/config/prisma/coupon-function'

describe('Coupon PrismaClient Unit Tests', () => {
  const params = {
    id: 'any_id',
    name: 'any_name',
    description: 'any_description',
    code: 'any_code',
    discount: 'any_discount',
    link: 'any_link',
    expiration_date: 'any_date',
    is_verified: false,
    store_id: 'any_store_id',
  }

  it('should PrismaClient create a coupon', async () => {
    prismaMock.coupon.create.mockResolvedValue(params)

    await expect(create(params)).resolves.toEqual({
      id: 'any_id',
      name: 'any_name',
      description: 'any_description',
      code: 'any_code',
      discount: 'any_discount',
      link: 'any_link',
      expiration_date: 'any_date',
      is_verified: false,
      store_id: 'any_store_id',
    })
  })

  it('should PrismaClient list all the coupouns', async () => {
    prismaMock.coupon.findMany.mockResolvedValue([
      {
        id: 'any_id',
        name: 'any_name',
        description: 'any_description',
        code: 'any_code',
        discount: 'any_discount',
        link: 'any_link',
        expiration_date: 'any_date',
        is_verified: false,
        store_id: 'any_store_id',
      }
    ])

    await expect(list()).resolves.toEqual([{
      id: 'any_id',
      name: 'any_name',
      description: 'any_description',
      code: 'any_code',
      discount: 'any_discount',
      link: 'any_link',
      expiration_date: 'any_date',
      is_verified: false,
      store_id: 'any_store_id',
    }])
  })

  it('should PrismaClient list all coupons from a store', async () => {
    prismaMock.coupon.findMany.mockResolvedValue([
      {
        id: 'any_id',
        name: 'any_name',
        description: 'any_description',
        code: 'any_code',
        discount: 'any_discount',
        link: 'any_link',
        expiration_date: 'any_date',
        is_verified: false,
        store_id: 'any_store_id',
      }
    ])

    await expect(listFromStore({ storeId: 'any_id' })).resolves.toEqual([{
      id: 'any_id',
      name: 'any_name',
      description: 'any_description',
      code: 'any_code',
      discount: 'any_discount',
      link: 'any_link',
      expiration_date: 'any_date',
      is_verified: false,
      store_id: 'any_store_id',
    }])
  })

  it('should PrismaClient update a coupon', async () => {
    prismaMock.coupon.update.mockResolvedValue({
      id: 'any_id',
      name: 'any_name',
      description: 'any_description',
      code: 'any_code',
      discount: 'any_discount',
      link: 'any_link',
      expiration_date: 'any_date',
      is_verified: false,
      store_id: 'any_store_id',
    })

    await expect(update(params)).resolves.toEqual({
      id: 'any_id',
      name: 'any_name',
      description: 'any_description',
      code: 'any_code',
      discount: 'any_discount',
      link: 'any_link',
      expiration_date: 'any_date',
      is_verified: false,
      store_id: 'any_store_id',
    })
  })

  it('should PrismaClient delete a coupon', async () => {
    prismaMock.coupon.delete.mockResolvedValue({
      id: 'any_id',
      name: 'any_name',
      description: 'any_description',
      code: 'any_code',
      discount: 'any_discount',
      link: 'any_link',
      expiration_date: 'any_date',
      is_verified: false,
      store_id: 'any_store_id',
    })

    await expect(deleteCoupon({ id: 'any_id' })).resolves.toEqual({
      id: 'any_id',
      name: 'any_name',
      description: 'any_description',
      code: 'any_code',
      discount: 'any_discount',
      link: 'any_link',
      expiration_date: 'any_date',
      is_verified: false,
      store_id: 'any_store_id',
    })
  })
})
