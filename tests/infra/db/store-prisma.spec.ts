import { prismaMock } from '../../../src/infra/db/prisma/singleton'
import { createStore, findStoreById, findStoresByName, listStores, updateStore } from '../../../src/main/config/prisma/store-functions'

describe('Store PrismaClient Unit Tests', () => {
  let params = {
    id: 'any_id',
    name: 'any_name',
    link: 'any_link',
    image: 'any_image',
  }

  it('should create a new store', async () => {
    prismaMock.store.create.mockResolvedValue(params)

    await expect(createStore(params)).resolves.toEqual({
      id: 'any_id',
      name: 'any_name',
      link: 'any_link',
      image: 'any_image',
    })
  })

  it('should list all stores', async () => {
    prismaMock.store.findMany.mockResolvedValue([
      {
        id: 'any_id',
        name: 'any_name',
        link: 'any_link',
        image: 'any_image',
      }
    ])

    await expect(listStores()).resolves.toEqual(
      [
        {
          id: 'any_id',
          name: 'any_name',
          link: 'any_link',
          image: 'any_image',
        }
      ]
    )
  })

  it('should find a store by its id', async () => {
    prismaMock.store.findUnique.mockResolvedValue({
      id: 'any_id',
      name: 'any_name',
      link: 'any_link',
      image: 'any_image',
    })

    await expect(findStoreById({ id: 'any_id' })).resolves.toEqual({
      id: 'any_id',
      name: 'any_name',
      link: 'any_link',
      image: 'any_image',
    }
    )
  })

  it('should find stores by its names or parts of it', async () => {
    prismaMock.store.findFirst.mockResolvedValue({
      id: 'any_id',
      name: 'any_name',
      link: 'any_link',
      image: 'any_image',
    })

    await expect(findStoresByName({ name: 'any_name' })).resolves.toEqual({
      id: 'any_id',
      name: 'any_name',
      link: 'any_link',
      image: 'any_image',
    })
  })

  it('should update a store', async () => {
    const params = {
      id: 'any_id',
      name: 'any_name2',
      link: 'any_link2',
      image: 'any_image2',
    }


    prismaMock.store.update.mockResolvedValue(params)

    await expect(updateStore(params)).resolves.toEqual({
      id: 'any_id',
      name: 'any_name2',
      link: 'any_link2',
      image: 'any_image2',
    })
  })
})
