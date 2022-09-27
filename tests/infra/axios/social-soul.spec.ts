import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { mockDeep, MockProxy, mock } from 'jest-mock-extended'

interface InputSocialSoul {
  appToken: string
  sourceId: string
}

interface Event {
  event: string
  eventType: string
  fixedCommission: boolean
  commission: number
}

interface Store {
  id: number
  name: string
  thumbnail: string
  link: string
  hasOffer: number
  maxCommission: number
  events: Event[]
}

interface OutputSocialSoulGetStores {
  requestInfo: {
    status: string
    message: string
    generatedDate: null
  },
  pagination: {
    page: number
    size: number
    totalSize: number
    totalPage: number
    sortValues: null
  },
  stores: Store[]
}

export class SocialSoul {
  private _appToken: string
  private _sourceId: string

  constructor (params: InputSocialSoul) {
    this._appToken = params.appToken
    this._sourceId = params.sourceId
    this.validate()
  }

  private validate (): void {
    if (this._sourceId.length === 0) {
      throw new Error('SourceId is required')
    }
    if (this._appToken.length === 0) {
      this._appToken = '16053748295126c5e45a0'
    }
  }

  private connect (): AxiosInstance {
    return axios.create({
      baseURL: `http://sandbox-api.lomadee.com/v3/${this._appToken}`,
      params: {
        sourceId: this._sourceId
      }
    })
  }

  get appToken (): string {
    return this._appToken
  }

  public async getStores (): Promise<OutputSocialSoulGetStores> {
    const { data } = await this.connect().get('/store/_all')

    return data
  }
}

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
    const axios = mock<SocialSoul>()

    axios.getStores.mockResolvedValue({
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

    expect(await axios.getStores()).toEqual({
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
