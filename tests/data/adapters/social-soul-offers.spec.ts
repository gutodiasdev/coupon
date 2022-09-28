import { mockDeep, MockProxy } from 'jest-mock-extended'
import { AdapterSocialSoulOffersInterface } from '../../../src/data/adapters/social-soul-offers'
import { InputSocialSoul } from '../../../src/infra/external/social-soul/social-soul'


describe('', () => {
  const params: InputSocialSoul = {
    appToken: 'any_token',
    sourceId: 'any_id'
  }

  let adapter: MockProxy<AdapterSocialSoulOffersInterface>

  beforeEach(() => {
    adapter = mockDeep<AdapterSocialSoulOffersInterface>()
  })

  it('should return a build array only with offers', async () => {
    // const socialSoul = new SocialSoul(params)
    // const sut = new AdapterSocialSoulOffers(socialSoul)

    // adapter.getOffers.mockRejectedValue({
    //   "offers": [
    //     {
    //       "id": "100",
    //       "name": "Chave Biela de 11/16\" Gedore",
    //       "category": {
    //         "id": 1,
    //         "name": "Geral",
    //         "link": "http://api.lomadee.com/v3/1638927471938e7b04077/category/_id/0?sourceId=37145983"
    //       },
    //       "link": "https://developer.lomadee.com/redir/validation/?sourceId=37145983&appToken=1638927471938e7b04077",
    //       "thumbnail": "https://static.ferramentaskennedy.com.br/storage/original/chave-biela-de-11-16-gedore_1.jpeg",
    //       "price": 36.43,
    //       "discount": 0.0,
    //       "installment": {
    //         "quantity": 1,
    //         "value": 32.79
    //       },
    //       "store": {
    //         "id": 1654,
    //         "name": "Ferramentas Kennedy",
    //         "thumbnail": "https://www.lomadee.com/programas/BR/1654/imagemBox_80x60.png",
    //         "link": "https://developer.lomadee.com/redir/validation/?sourceId=37145983&appToken=1638927471938e7b04077",
    //         "invisible": false,
    //         "needPermission": false
    //       }
    //     }
    //   ]
    // })

    // expect(await adapter.getOffers({ storeId: 'any_id' })).toEqual({
    //   "offers": [
    //     {
    //       "id": "100",
    //       "name": "Chave Biela de 11/16\" Gedore",
    //       "category": {
    //         "id": 1,
    //         "name": "Geral",
    //         "link": "http://api.lomadee.com/v3/1638927471938e7b04077/category/_id/0?sourceId=37145983"
    //       },
    //       "link": "https://developer.lomadee.com/redir/validation/?sourceId=37145983&appToken=1638927471938e7b04077",
    //       "thumbnail": "https://static.ferramentaskennedy.com.br/storage/original/chave-biela-de-11-16-gedore_1.jpeg",
    //       "price": 36.43,
    //       "discount": 0.0,
    //       "installment": {
    //         "quantity": 1,
    //         "value": 32.79
    //       },
    //       "store": {
    //         "id": 1654,
    //         "name": "Ferramentas Kennedy",
    //         "thumbnail": "https://www.lomadee.com/programas/BR/1654/imagemBox_80x60.png",
    //         "link": "https://developer.lomadee.com/redir/validation/?sourceId=37145983&appToken=1638927471938e7b04077",
    //         "invisible": false,
    //         "needPermission": false
    //       }
    //     }
    //   ]
    // })
  })
})
