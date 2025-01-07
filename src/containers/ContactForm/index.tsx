import * as S from './styles'
import { Tags } from '../../utils/enums/tags'
import { FormEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Contact from '../../models/Contact'
import { createContact, updateContact } from '../../store/reducers/contacts'

type Props = {
  isEditing?: boolean
  contact?: Contact
}

const ContactForm = ({ isEditing, contact }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')
  const [tag, setTag] = useState('')

  useEffect(() => {
    if (isEditing && contact) {
      setName(contact.name)
      setSurname(contact.surname)
      setEmail(contact.email)
      setPhone(contact.phone)
      setDescription(contact.description)
      setTag(contact.tag)
    }
  }, [isEditing, contact])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (isEditing && contact) {
      dispatch(
        updateContact({
          id: contact.id,
          name,
          surname,
          email,
          phone,
          description,
          tag
        })
      )
      navigate('/')
    } else {
      dispatch(
        createContact({
          name,
          surname,
          email,
          phone,
          description,
          tag
        })
      )
      navigate('/')
    }
  }

  console.log(contact)

  return (
    <>
      {isEditing ? (
        <S.Form onSubmit={handleSubmit}>
          <S.Row>
            <S.FieldTitle>Personal Info</S.FieldTitle>
            <S.Hr />
          </S.Row>
          <S.Col>
            <S.Input
              border
              type="text"
              placeholder="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <S.Input
              border
              type="text"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </S.Col>
          <S.Col>
            <S.Input
              border
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <S.Input
              border
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </S.Col>
          <S.Row>
            <S.FieldTitle>Details</S.FieldTitle>
            <S.Hr />
          </S.Row>
          <S.Col>
            <S.Input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <S.Select
              defaultValue=""
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            >
              <option disabled value="">
                Select a tag
              </option>
              {Object.values(Tags).map((tag, index) => (
                <option key={index} value={tag}>
                  {tag}
                </option>
              ))}
            </S.Select>
          </S.Col>
          <S.Row>
            <S.SubmitBtn type="edit">Save Edit</S.SubmitBtn>
          </S.Row>
        </S.Form>
      ) : (
        <S.Form onSubmit={handleSubmit}>
          <S.Row>
            <S.FieldTitle>Personal Info</S.FieldTitle>
            <S.Hr />
          </S.Row>
          <S.Col>
            <S.Input
              border
              type="text"
              placeholder="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <S.Input
              border
              type="text"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </S.Col>
          <S.Col>
            <S.Input
              border
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <S.Input
              border
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </S.Col>
          <S.Row>
            <S.FieldTitle>Details</S.FieldTitle>
            <S.Hr />
          </S.Row>
          <S.Col>
            <S.Input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <S.Select
              defaultValue=""
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            >
              <option disabled value="">
                Select a tag
              </option>
              {Object.values(Tags).map((tag, index) => (
                <option key={index} value={tag}>
                  {tag}
                </option>
              ))}
            </S.Select>
          </S.Col>
          <S.Row>
            <S.SubmitBtn type="create">Done</S.SubmitBtn>
          </S.Row>
        </S.Form>
      )}
    </>
  )
}

export default ContactForm
