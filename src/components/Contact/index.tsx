import { IoOptionsOutline } from 'react-icons/io5'
import ContactClass from '../../models/Contact'
import * as S from './styles'
import { AiOutlineDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../store/reducers/contacts'

type Props = ContactClass

const Contact = ({
  id,
  name,
  surname,
  phone,
  email,
  description,
  tag
}: Props) => {
  const fullName = `${name} ${surname}`
  const thumbLetter = `${name.charAt(0)} ${surname.charAt(0)}`
  const dispatch = useDispatch()

  const selfDelete = () => {
    dispatch(deleteContact(id))
  }

  const contactData: ContactClass = {
    id,
    name,
    surname,
    phone,
    email,
    description,
    tag
  }
  return (
    <S.Container>
      <S.Thumb>{thumbLetter}</S.Thumb>
      <S.Field>
        <S.Title>{fullName}</S.Title>
        <S.Subtitle>{description}</S.Subtitle>
      </S.Field>
      <S.Field>
        <S.Title>{phone}</S.Title>
        <S.Subtitle>{email}</S.Subtitle>
      </S.Field>
      <S.Field>
        <S.tag>{tag}</S.tag>
      </S.Field>
      <S.Field>
        <S.EditBtn to={'/edit_contact'} state={{ contactData }}>
          <IoOptionsOutline />
        </S.EditBtn>
      </S.Field>
      <S.Field>
        <S.DeleteBtn onClick={selfDelete}>
          <AiOutlineDelete />
        </S.DeleteBtn>
      </S.Field>
    </S.Container>
  )
}

export default Contact
