import { mock } from 'jest-mock-extended'
import { AdapterSocialSoulOffers } from '../../../src/data/adapters/adapter-social-soul-offers'
import { SocialSoulInterface } from '../../../src/infra/external/social-soul/social-soul'


describe('AdapterSocialSoul Integration Tests', () => {
  it('should return a array with offers', async () => {
    const socialSoul = mock<SocialSoulInterface>()
    const sut = new AdapterSocialSoulOffers(socialSoul)

    socialSoul.getOfferFromStore.mockResolvedValue({
      "requestInfo": {
        "status": "OK",
        "message": "SUCCESS",
        "generatedDate": null
      },
      "pagination": {
        "page": 1,
        "size": 12,
        "totalSize": 1,
        "totalPage": 1,
        "sortValues": [
          "1664232502000",
          "1654",
          "101127"
        ]
      },
      "offers": [
        {
          "id": "100",
          "name": "Chave Biela de 11/16\" Gedore",
          "category": {
            "id": 1,
            "name": "Geral",
            "link": "http://api.lomadee.com/v3/1638927471938e7b04077/category/_id/0?sourceId=37145983"
          },
          "link": "https://developer.lomadee.com/redir/validation/?sourceId=37145983&appToken=1638927471938e7b04077",
          "thumbnail": "https://static.ferramentaskennedy.com.br/storage/original/chave-biela-de-11-16-gedore_1.jpeg",
          "price": 36.43,
          "discount": 0.0,
          "installment": {
            "quantity": 1,
            "value": 32.79
          },
          "store": {
            "id": 1654,
            "name": "Ferramentas Kennedy",
            "thumbnail": "https://www.lomadee.com/programas/BR/1654/imagemBox_80x60.png",
            "link": "https://developer.lomadee.com/redir/validation/?sourceId=37145983&appToken=1638927471938e7b04077",
            "invisible": false,
            "needPermission": false
          }
        }
      ]
    })

    expect(await sut.getOffers({ storeId: 'any_id' })).toEqual({
      "offers": [
        {
          "id": "100",
          "name": "Chave Biela de 11/16\" Gedore",
          "category": {
            "id": 1,
            "name": "Geral",
            "link": "http://api.lomadee.com/v3/1638927471938e7b04077/category/_id/0?sourceId=37145983"
          },
          "link": "https://developer.lomadee.com/redir/validation/?sourceId=37145983&appToken=1638927471938e7b04077",
          "thumbnail": "https://static.ferramentaskennedy.com.br/storage/original/chave-biela-de-11-16-gedore_1.jpeg",
          "price": 36.43,
          "discount": 0.0,
          "installment": {
            "quantity": 1,
            "value": 32.79
          },
          "store": {
            "id": 1654,
            "name": "Ferramentas Kennedy",
            "thumbnail": "https://www.lomadee.com/programas/BR/1654/imagemBox_80x60.png",
            "link": "https://developer.lomadee.com/redir/validation/?sourceId=37145983&appToken=1638927471938e7b04077",
            "invisible": false,
            "needPermission": false
          }
        }
      ]
    })

  })
})
