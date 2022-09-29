import { prismaMock } from '../../../src/infra/db/prisma/singleton'
import { createStore } from '../../../src/main/config/prisma/store-function'

describe('Store PrismaClient Unit Tests', () => {
  it('should create a new store', async () => {
    const params = {
      id: 'any_id',
      name: 'any_name',
      link: 'any_link',
      image: 'any_image',
    }

    prismaMock.store.create.mockResolvedValue(params)

    await expect(createStore(params)).resolves.toEqual({
      id: 'any_id',
      name: 'any_name',
      link: 'any_link',
      image: 'any_image',
    })
  })
})
