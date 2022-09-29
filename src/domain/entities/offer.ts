export interface InputOfferInterface {
  name: string
  link: string
  image: string
  price: string
  oldPrice: string
  discount: string
  storeId: string
}

export class Offer {
  private _name: string
  private _link: string
  private _image: string
  private _price: string
  private _oldPrice: string
  private _discount: string
  private _storeId: string

  constructor (params: InputOfferInterface) {
    this._name = params.name
    this._link = params.link
    this._image = params.image
    this._price = params.price
    this._oldPrice = params.oldPrice
    this._discount = params.discount
    this._storeId = params.storeId
    this.validade()
  }

  private validade (): void {
    if (this._name.length === 0) {
      throw new Error('Offer name is required')
    }
    if (this._link.length === 0) {
      throw new Error('Offer link is required')
    }
    if (this._image.length === 0) {
      throw new Error('Offer image is required')
    }
    if (this._price.length === 0) {
      throw new Error('Offer price is required')
    }
    if (this._storeId.length === 0) {
      throw new Error('Offer store id is required')
    }
  }
}