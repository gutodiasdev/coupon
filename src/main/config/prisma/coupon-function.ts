import prisma from '../../../infra/db/prisma/client'

interface CreateCoupon {
  name: string
  description: string
  code: string
  discount: string
  link: string
  expiration_date: string
  is_verified: boolean
  store_id: string
}

interface ListFromStore {
  storeId: string
}

interface UpdateCoupon {
  id: string
  name: string
  description: string
  code: string
  discount: string
  link: string
  expiration_date: string
  is_verified: boolean
  store_id: string
}

export async function create (params: CreateCoupon) {
  return await prisma.coupon.create({
    data: params
  })
}

export async function list () {
  return await prisma.coupon.findMany({})
}

export async function listFromStore (params: ListFromStore) {
  return await prisma.coupon.findMany({
    where: {
      store_id: params.storeId
    }
  })
}

export async function update (params: UpdateCoupon) {
  return await prisma.coupon.update({
    where: { id: params.id },
    data: {
      name: params.name,
      description: params.description,
      link: params.link,
      code: params.code,
      discount: params.discount,
      expiration_date: params.expiration_date,
      is_verified: params.is_verified,
      store_id: params.store_id
    }
  })
}

interface DeleteCoupon {
  id: string
}

export async function deleteCoupon (params: DeleteCoupon) {
  return await prisma.coupon.delete({ where: { id: params.id } })
}