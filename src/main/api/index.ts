import { AdapterSocialSoulOffers } from '../../data/adapters/social-soul-offers'
import { SocialSoul } from '../../infra/external/social-soul/social-soul'

const socialSoul = new SocialSoul({ appToken: '16053748295126c5e45a0', sourceId: '37145983' })

// const response = socialSoul.getOfferFromStore({ storeId: '6149' })

const adapterSocilSoulOffer = new AdapterSocialSoulOffers(socialSoul)

adapterSocilSoulOffer.getOffers({
  storeId: '6020'
}).then(async (offers) => {
  console.log(offers.offers, offers.offers.length)
})
