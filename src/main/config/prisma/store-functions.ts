import prisma from '../../../infra/db/prisma/client'

interface InputCreateStore {
  name: string
  link: string
  image: string
}

interface InputFindStoreById {
  id: string
}

interface InputFindStoresByName {
  name: string
}

interface InputUpdateStore {
  id: string
  name: string
  image: string
  link: string
}

interface InputDeleteStore {
  id: string
}

export async function createStore (params: InputCreateStore) {
  return await prisma.store.create({
    data: params
  })
}

export async function listStores () {
  const stores = await prisma.store.findMany()

  return stores
}

export async function findStoreById (params: InputFindStoreById) {
  const store = await prisma.store.findUnique({ where: { id: params.id } })

  return store
}

export async function findStoresByName (params: InputFindStoresByName) {
  const stores = await prisma.store.findFirst({ where: { name: params.name } })

  return stores
}

export async function updateStore (params: InputUpdateStore) {
  return await prisma.store.update({
    where: {
      id: params.id,
    },
    data: {
      name: params.name,
      image: params.image,
      link: params.link,
    }
  })
}

export async function deleteStore (params: InputDeleteStore) {
  return await prisma.store.delete({
    where: { id: params.id }
  })
}