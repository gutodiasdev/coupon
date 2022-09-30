import prisma from '../../../infra/db/prisma/client'

interface CreateOffer {
  name: string
  link: string
  image: string
  price: string
  oldPrice: string
  discount: string
  store_id: string
}

export async function createOffer (params: CreateOffer) {
  return await prisma.offer.create({
    data: params
  })
}