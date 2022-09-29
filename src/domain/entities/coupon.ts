export interface InputCoupon {
  name: string
  storeId: string
  link: string
  image: string
}

export class Coupon {
  private _name: string
  private _storeId: string
  private _link: string
  private _image: string

  constructor (input: InputCoupon) {
    this._name = input.name
    this._storeId = input.storeId
    this._link = input.link
    this._image = input.image
    this.validate()
  }

  private validate () {
    if (this._name.length === 0) {
      throw new Error('Name is required')
    }

    if (this._storeId.length === 0) {
      throw new Error('Store id is required')
    }

    if (this._image.length === 0) {
      throw new Error('Image is required')
    }

    if (this._link.length === 0) {
      throw new Error('Link is required')
    }
  }
}