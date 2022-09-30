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

interface ListOfferFromStore {
  storeId: string
}

export async function createOffer (params: CreateOffer) {
  return await prisma.offer.create({
    data: params
  })
}

export async function listOfferFromStore (params: ListOfferFromStore) {
  const stores = await prisma.offer.findMany({ where: { store_id: params.storeId } })

  return stores
}