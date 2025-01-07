import Contact from '../../components/Contact'
import { RootReducer } from '../../store'
import { Subtitle, Title } from '../../styles/GlobalStyle'
import { useSelector } from 'react-redux'
import * as S from './styles'

const ContactList = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)
  const {
    query,
    tag: filterTag,
    type: filterType
  } = useSelector((state: RootReducer) => state.filter)

  const filterContact = () => {
    const filteredContacts = query
      ? items.filter(
          (contact) =>
            contact.name.toLowerCase().search(query.toLowerCase()) >= 0 ||
            contact.surname.toLowerCase().search(query.toLowerCase()) >= 0 ||
            contact.description.toLowerCase().search(query.toLowerCase()) >=
              0 ||
            contact.phone.toLowerCase().search(query.toLowerCase()) >= 0 ||
            contact.email.toLowerCase().search(query.toLowerCase()) >= 0
        )
      : items

    switch (filterType) {
      case 'All':
        return filteredContacts
        break
      case 'Tag':
        return filteredContacts.filter((contact) => contact.tag === filterTag)
    }
  }
  const contacts = filterContact()
  const contactsCount = contacts.length

  return (
    <S.Container>
      <Subtitle>{`${contactsCount} Total`}</Subtitle>
      <Title>Contacts</Title>
      <S.List>
        {contacts.map((item, index) => (
          <li key={index}>
            <Contact
              id={item.id}
              name={item.name}
              surname={item.surname}
              phone={item.phone}
              email={item.email}
              description={item.description}
              tag={item.tag}
            />
          </li>
        ))}
      </S.List>
    </S.Container>
  )
}

export default ContactList
