export interface InputCoupon {
  name: string
  store: string
  image: string
  oldPrice?: string
  currentPrice?: string
  type: string
}

export class Coupon {
  private _name: string
  private _store: string
  private _image: string
  private _currentPrice?: string
  private _oldPrice?: string
  private _type: string

  constructor (input: InputCoupon) {
    this._name = input.name
    this._store = input.store
    this._image = input.image
    this._oldPrice = input.oldPrice
    this._currentPrice = input.currentPrice
    this._type = input.type
    this.validate()
  }

  private validate () {
    if (this._name.length === 0) {
      throw new Error('Name is required')
    }

    if (this._store.length === 0) {
      throw new Error('Store is required')
    }

    if (this._image.length === 0) {
      throw new Error('Image is required')
    }

    if (this._type.length === 0) {
      throw new Error('Type is required')
    }

    if (this._type === 'offer' && this._currentPrice?.length === 0) {
      throw new Error('Price is required for a offer type')
    }
  }
}