import axios, { AxiosInstance } from 'axios'

export interface InputSocialSoul {
  appToken: string
  sourceId: string
}

export interface Event {
  event: string
  eventType: string
  fixedCommission: boolean
  commission: number
}

export interface Store {
  id: number
  name: string
  thumbnail: string
  link: string
  hasOffer: number
  maxCommission: number
  events: Event[]
}

export interface OutputSocialSoulGetStores {
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