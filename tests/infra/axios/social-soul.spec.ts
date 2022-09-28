import { MockProxy, mock } from 'jest-mock-extended'
import { InputSocialSoul, SocialSoul } from '../../../src/infra/external/social-soul/social-soul'

interface OutputMakeSUT {
  sut: SocialSoul
}

const makeSUT = (params: InputSocialSoul): OutputMakeSUT => {
  const sut = new SocialSoul(params)

  return {
    sut
  }
}

describe('SocialSoul Unit Tests', () => {
  let params = {
    appToken: '1638927471938e7b04077',
    sourceId: '37145983'
  }

  let mocked: MockProxy<SocialSoul>

  beforeEach(() => {
    mocked = mock<SocialSoul>()

  })

  it('should garantee SocialSoul is called with required parameters', () => {
    expect(() => {
      const sut = new SocialSoul({ ...params, sourceId: '' })
    }).toThrowError('SourceId is required')
  })

  it('should garantee SocialSoul recieves an default appToken when its not given', () => {
    const { sut } = makeSUT({ ...params, appToken: '' })

    expect(sut.appToken).toBe('16053748295126c5e45a0')
  })

  it('should return all SocialSoul stores when call getStores method', async () => {

    mocked.getStores.mockResolvedValue({
      requestInfo: {
        "status": "OK",
        "message": "SUCCESS",
        "generatedDate": null
      },
      pagination: {
        "page": 1,
        "size": 243,
        "totalSize": 243,
        "totalPage": 1,
        "sortValues": null
      },
      stores: [{
        "id": 158,
        "name": "Polishop",
        "thumbnail": "https://www.lomadee.com/programas/BR/158/logo_115x76.png",
        "link": "https://developer.lomadee.com/redir/validation/?sourceId=37145983&appToken=1638927471938e7b04077",
        "hasOffer": 0,
        "maxCommission": 6.4,
        "events": [
          {
            "event": "Vendas Polishop",
            "eventType": "Sale",
            "fixedCommission": false,
            "commission": 0.064
          }
        ]
      }]
    })

    expect(await mocked.getStores()).toEqual({
      requestInfo: {
        "status": "OK",
        "message": "SUCCESS",
        "generatedDate": null
      },
      pagination: {
        "page": 1,
        "size": 243,
        "totalSize": 243,
        "totalPage": 1,
        "sortValues": null
      },
      stores: [{
        "id": 158,
        "name": "Polishop",
        "thumbnail": "https://www.lomadee.com/programas/BR/158/logo_115x76.png",
        "link": "https://developer.lomadee.com/redir/validation/?sourceId=37145983&appToken=1638927471938e7b04077",
        "hasOffer": 0,
        "maxCommission": 6.4,
        "events": [
          {
            "event": "Vendas Polishop",
            "eventType": "Sale",
            "fixedCommission": false,
            "commission": 0.064
          }
        ]
      }]
    })
  })

  it('should return all offers from stores when call getStoresFromStore method passing a store id', async () => {
    mocked.getOfferFromStore.mockResolvedValue({
      "requestInfo": {
        "status": "OK",
        "message": "SUCCESS",
        "generatedDate": null
      },
      "pagination": {
        "page": 1,
        "size": 12,
        "totalSize": 1,
        "totalPage": 2,
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

    expect(await mocked.getOfferFromStore({ storeId: 'any_id' })).toEqual({
      "requestInfo": {
        "status": "OK",
        "message": "SUCCESS",
        "generatedDate": null
      },
      "pagination": {
        "page": 1,
        "size": 12,
        "totalSize": 1,
        "totalPage": 2,
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
  })

  it('should return all coupons when call getCoupons method', async () => {
    mocked.getCoupons.mockResolvedValue({
      "requestInfo": {
        "status": "OK",
        "message": "SUCCESS",
        "generatedDate": null
      },
      "pagination": {
        "page": 1,
        "size": 12,
        "totalSize": 19310,
        "totalPage": 1610,
        "sortValues": [
          "1664232502000",
          "1654",
          "101127"
        ]
      },
      "coupons": [
        {
          "id": 15971,
          "description": "10% de desconto nos itens selecionados de Fun Kitchen e La Cuisine",
          "code": "CLASSICOS10",
          "discount": 10.0,
          "store": {
            "id": 5644,
            "name": "Shoptime",
            "image": "https://www.lomadee.com/programas/BR/5644/logo_185x140.png",
            "link": "https://www.shoptime.com.br/"
          },
          "category": {
            "id": 99012,
            "name": "Mais Ofertas"
          },
          "vigency": "30/09/2022 17:00:00",
          "link": "https://developer.lomadee.com/redir/validation/?sourceId=37145983&appToken=1638927471938e7b04077",
          "new": true
        }
      ]
    })

    expect(await mocked.getCoupons()).toEqual({
      "requestInfo": {
        "status": "OK",
        "message": "SUCCESS",
        "generatedDate": null
      },
      "pagination": {
        "page": 1,
        "size": 12,
        "totalSize": 19310,
        "totalPage": 1610,
        "sortValues": [
          "1664232502000",
          "1654",
          "101127"
        ]
      },
      "coupons": [
        {
          "id": 15971,
          "description": "10% de desconto nos itens selecionados de Fun Kitchen e La Cuisine",
          "code": "CLASSICOS10",
          "discount": 10.0,
          "store": {
            "id": 5644,
            "name": "Shoptime",
            "image": "https://www.lomadee.com/programas/BR/5644/logo_185x140.png",
            "link": "https://www.shoptime.com.br/"
          },
          "category": {
            "id": 99012,
            "name": "Mais Ofertas"
          },
          "vigency": "30/09/2022 17:00:00",
          "link": "https://developer.lomadee.com/redir/validation/?sourceId=37145983&appToken=1638927471938e7b04077",
          "new": true
        }
      ]
    })
  })
})
