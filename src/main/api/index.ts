class Person {
  private _firstName: string
  private _lastName: string

  constructor (firstName: string, lastName: string) {
    this._firstName = firstName
    this._lastName = lastName
  }

  get firstName () { return this._firstName }

  public create () {
    return {
      name: this._firstName,
      lastName: this._lastName
    }
  }
}


const person = new Person('Augusto', 'Silva')
console.log(person.create())