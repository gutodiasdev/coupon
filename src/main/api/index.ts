class Person {
  private _firstName: string
  private _lastName: string

  constructor (firstName: string, lastName: string) {
    this._firstName = firstName
    this._lastName = lastName
  }

  get firstName () { return this._firstName }
}

const person = new Person('Augusto', 'Silva')

console.log(person)