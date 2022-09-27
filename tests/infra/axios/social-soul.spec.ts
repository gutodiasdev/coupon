import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { mockDeep, MockProxy, mock } from 'jest-mock-extended'
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

  let axiosMock: MockProxy<SocialSoul>
  beforeEach(() => {
    axiosMock = mockDeep<SocialSoul>()
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

  it('', async () => {
    const mocked = mock<SocialSoul>()

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
})
