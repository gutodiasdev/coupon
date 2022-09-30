export interface InputCoupon {
  name: string
  storeId: string
  link: string
  image: string
  code: string
  description?: string
  expiration_date: string
  discount: string
}

export class Coupon {
  private _name: string
  private _storeId: string
  private _link: string
  private _image: string
  private _code: string
  private _discount: string
  private _description?: string
  private _expiration_date: string

  constructor (input: InputCoupon) {
    this._name = input.name
    this._code = input.code
    this._storeId = input.storeId
    this._link = input.link
    this._image = input.image
    this._description = input.description
    this._expiration_date = input.expiration_date
    this._discount = input.discount
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

    if (this._expiration_date.length === 0) {
      throw new Error('Expiration date is required')
    }

    if (this._code.length === 0) {
      throw new Error('Code is required')
    }
  }
}