import prisma from '../../../infra/db/prisma/client'

export interface InputCreateStore {
  name: string
  link: string
  image: string
}

export async function createStore (params: InputCreateStore) {
  return await prisma.store.create({
    data: params
  })
}