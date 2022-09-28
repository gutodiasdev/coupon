import { InputSocialSoulGetOffersFromStore, Offer, SocialSoulInterface } from '../../infra/external/social-soul/social-soul'

export interface InputGetOffers {
  id: string
}

export interface OutputAdapterSocialSoulGetOffer {
  offers: Offer[]
}

export interface AdapterSocialSoulOffersInterface {
  getOffers (params: InputSocialSoulGetOffersFromStore): Promise<OutputAdapterSocialSoulGetOffer>
}

export class AdapterSocialSoulOffers implements AdapterSocialSoulOffersInterface {
  constructor (
    private readonly socialSoul: SocialSoulInterface
  ) { }

  async getOffers (params: InputSocialSoulGetOffersFromStore): Promise<OutputAdapterSocialSoulGetOffer> {
    let totalPage: number
    let offers: Offer[] = []
    let currentPage = 1

    const { offers: result, pagination } = await this.socialSoul.getOfferFromStore({ storeId: params.storeId, pageCount: currentPage })

    offers = result

    totalPage = pagination.totalPage

    while (currentPage < totalPage) {
      currentPage = currentPage + 1
      const { offers: response } = await this.socialSoul.getOfferFromStore({ storeId: params.storeId, pageCount: currentPage })
      offers = offers.concat(response)
    }

    return {
      offers: offers
    }
  }
}