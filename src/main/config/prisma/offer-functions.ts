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

interface UpdateOffer {
  id: string
  name: string
  link: string
  image: string
  price: string
  oldPrice: string
  discount: string
  store_id: string
  is_verified: boolean
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

export async function updateOffer (params: UpdateOffer) {
  return await prisma.offer.update({
    where: {
      id: params.id,
    },
    data: {
      name: params.name,
      image: params.image,
      link: params.link,
      price: params.price,
      oldPrice: params.oldPrice,
      is_verified: params.is_verified,
      discount: params.discount
    }
  })
}