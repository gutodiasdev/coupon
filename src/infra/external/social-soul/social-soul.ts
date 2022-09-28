import axios, { AxiosInstance } from 'axios'

export interface InputSocialSoul {
  appToken: string
  sourceId: string
}

export type Event = {
  event: string
  eventType: string
  fixedCommission: boolean
  commission: number
}

export type Store = {
  id: number
  name: string
  thumbnail: string
  link: string
  hasOffer: number
  maxCommission: number
  events: Event[]
}

export type Category = {
  id: number
  name: string
  link: string
}

export type Offer = {
  id: string
  name: string
  category: Category
  link: string
  thumbnail: string,
  price: number,
  discount: number,
  installment: {
    quantity: number,
    value: number
  },
  store: {
    id: number,
    name: string,
    thumbnail: string,
    link: string,
    invisible: boolean,
    needPermission: boolean
  }
}

export type Coupon = {
  id: number
  description: string
  code: string
  discount: number
  store: {
    id: number
    name: string
    image: string
    link: string
  },
  category: {
    id: number
    name: string
  },
  vigency: string,
  link: string,
  new: boolean
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

export interface InputSocialSoulGetOffersFromStore {
  storeId: string
}

export interface OutputSocialSoulGetOffersFromStore {
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
    sortValues?: string[]
  },
  offers: Offer[]
}

export interface OutputSocialSoulGetCoupons {
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
    sortValues?: string[]
  },
  coupons: Coupon[]
}

export interface SocialSoulInterface {
  getStores (): Promise<OutputSocialSoulGetStores>
  getOfferFromStore (params: InputSocialSoulGetOffersFromStore): Promise<OutputSocialSoulGetOffersFromStore>
  getCoupons (): Promise<OutputSocialSoulGetCoupons>
}

export class SocialSoul implements SocialSoulInterface {
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

  private connect (apiVersion: string = 'v3'): AxiosInstance {
    return axios.create({
      baseURL: `https://api.lomadee.com/${apiVersion}/${this._appToken}`,
      params: {
        sourceId: this._sourceId
      }
    })
  }

  get appToken (): string {
    return this._appToken
  }

  public async getStores (): Promise<OutputSocialSoulGetStores> {
    const { data } = await this.connect().get<OutputSocialSoulGetStores>('/store/_all')

    return {
      requestInfo: {
        status: data.requestInfo.status,
        message: data.requestInfo.message,
        generatedDate: data.requestInfo.generatedDate,
      },
      pagination: {
        page: data.pagination.page,
        size: data.pagination.size,
        totalSize: data.pagination.totalSize,
        totalPage: data.pagination.totalPage,
        sortValues: data.pagination.sortValues,
      },
      stores: data.stores
    }
  }

  public async getOfferFromStore (params: InputSocialSoulGetOffersFromStore): Promise<OutputSocialSoulGetOffersFromStore> {
    const { data } = await this.connect().get<OutputSocialSoulGetOffersFromStore>(`/offer/_store/${params.storeId}`)

    return {
      requestInfo: {
        status: data.requestInfo.status,
        message: data.requestInfo.message,
        generatedDate: data.requestInfo.generatedDate
      },
      pagination: {
        page: data.pagination.page,
        size: data.pagination.size,
        totalSize: data.pagination.totalSize,
        totalPage: data.pagination.totalPage,
        sortValues: data.pagination.sortValues
      },
      offers: data.offers
    }
  }

  public async getCoupons (): Promise<OutputSocialSoulGetCoupons> {
    const { data } = await this.connect('v2').get<OutputSocialSoulGetCoupons>('/coupon/_all')

    return {
      requestInfo: {
        status: data.requestInfo.status,
        message: data.requestInfo.message,
        generatedDate: data.requestInfo.generatedDate
      },
      pagination: {
        page: data.pagination.page,
        size: data.pagination.size,
        totalSize: data.pagination.totalSize,
        totalPage: data.pagination.totalPage,
        sortValues: data.pagination.sortValues
      },
      coupons: data.coupons
    }
  }
}