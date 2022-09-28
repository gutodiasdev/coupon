export interface InputCategory {
  name: string
}

export class Category {
  private _name: string

  constructor (params: InputCategory) {
    this._name = params.name
    this.validate()
  }

  private validate (): void {
    if (this._name.length === 0) {
      throw new Error('Category name is required')
    }
  }
}