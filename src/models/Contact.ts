class Contact {
  id: number
  name: string
  surname: string
  email: string
  phone: string

  constructor(
    id: number,
    name: string,
    surname: string,
    email: string,
    phone: string
  ) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
  }
}

export default Contact
