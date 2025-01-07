class Contact {
  id: number
  name: string
  surname: string
  email: string
  phone: string
  description: string
  tag: string

  constructor(
    id: number,
    name: string,
    surname: string,
    email: string,
    phone: string,
    description: string,
    tag: string
  ) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
    this.description = description
    this.tag = tag
  }
}

export default Contact
