export interface InputStore {
  name: string
  image: string
  link: string
}

export interface OutputStore {
  name: string
  image: string
  link: string
}

export class Store {
  private _name: string
  private _image: string
  private _link: string

  constructor (params: InputStore) {
    this._name = params.name
    this._image = params.image
    this._link = params.link
    this.validate()
  }

  private validate (): void {
    if (this._name.length === 0) {
      throw new Error('Store name is required')
    }

    if (this._link.length === 0) {
      throw new Error('Store link is required')
    }

    if (this._image.length === 0) {
      this._image = 'default_image'
    }
  }

  get image () {
    return this._image
  }

  get name () {
    return this._name
  }

  get link () {
    return this._link
  }
}