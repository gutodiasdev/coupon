import { mockDeep, MockProxy } from 'jest-mock-extended'
import { Store } from '../../../../src/domain/entities/store'
import prisma from '../../../../src/infra/db/prisma/client'

export interface InputSaveStoreRepository {
  name: string
  link: string
  image: string
}

export interface OutputSaveStoreRepository {
  id: string
  name: string
  link: string
  image: string
}

type OutputStore = {
  id: string
  name: string
  image: string
  link: string
}

export interface InputFindById {
  id: string
}

export interface OutputFindById {
  id: string
  name: string
  link: string
  image: string
}

interface InputFindByName {
  name: string
}

export interface OutputFindByName {
  id: string
  name: string
  link: string
  image: string
}

export interface OutputListStoresRepository {
  stores: OutputStore[]
}

export interface IStoreRepository {
  saveStore (params: InputSaveStoreRepository): Promise<OutputSaveStoreRepository>
  listStores (): Promise<OutputListStoresRepository>
  findById (params: InputFindById): Promise<OutputFindById>
  findByName (params: InputFindByName): Promise<OutputFindByName[]>
}

export class StoreRepository implements IStoreRepository {
  async saveStore (params: InputSaveStoreRepository): Promise<OutputSaveStoreRepository> {
    try {
      return await prisma.store.create({
        data: params
      })
    } catch {
      throw new Error('Failed to create a store')
    }
  }

  async listStores (): Promise<OutputListStoresRepository> {
    try {
      const result = await prisma.store.findMany()

      return {
        stores: result
      }
    } catch {
      throw new Error('Failed to list stores')
    }
  }

  async findById (params: InputFindById): Promise<OutputFindById> {
    try {

      const store = await prisma.store.findUniqueOrThrow({
        where: { id: params.id }
      })

      return {
        id: store.id,
        name: store.name,
        link: store.link,
        image: store.image,
      }

    } catch {
      throw new Error('Failed to find store by id')
    }
  }

  async findByName (params: InputFindByName): Promise<OutputFindByName[]> {
    try {

      const stores = await prisma.store.findMany({
        where: {
          name: params.name,
        }
      })

      return stores

    } catch {
      throw new Error('Failed to find store by name')
    }
  }
}

describe('Store Repository Unit Tests', () => {
  let sut: MockProxy<IStoreRepository>
  const params = {
    name: 'any_name',
    link: 'any_link',
    image: 'any_image'
  }

  beforeEach(() => {
    sut = mockDeep<StoreRepository>()
  })

  it('should create a store', async () => {
    const store = new Store(params)
    sut.saveStore.mockResolvedValue({ ...params, id: 'any_id' })

    expect(await sut.saveStore(store)).toEqual({
      id: 'any_id',
      name: 'any_name',
      link: 'any_link',
      image: 'any_image'
    })
  })

  it('should list all stores', async () => {
    sut.listStores.mockResolvedValue({
      stores: [{
        id: 'any_id',
        name: 'any_name',
        link: 'any_link',
        image: 'any_image'
      }]
    })

    expect(await sut.listStores()).toEqual({
      stores: [{
        id: 'any_id',
        name: 'any_name',
        link: 'any_link',
        image: 'any_image'
      }]
    })
  })

  it('should find a store by its id', async () => {
    const storeId = {
      id: 'any_id',
    }

    sut.findById.mockResolvedValue({
      id: storeId.id,
      name: 'any_name',
      link: 'any_link',
      image: 'any_image',
    })

    expect(await sut.findById(storeId)).toEqual({
      id: storeId.id,
      name: 'any_name',
      link: 'any_link',
      image: 'any_image',
    })
  })

  it('should find one or more stores by name', async () => {
    const params = {
      name: 'any_name',
    }

    sut.findByName.mockResolvedValue([{
      id: 'any_id',
      name: params.name,
      link: 'any_link',
      image: 'any_image',
    }])

    expect(await sut.findByName(params)).toEqual([{
      id: 'any_id',
      name: params.name,
      link: 'any_link',
      image: 'any_image',
    }])
  })
})
