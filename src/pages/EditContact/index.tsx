import { useLocation } from 'react-router-dom'
import Aside from '../../containers/Aside'
import ContactForm from '../../containers/ContactForm'

import { MainContainer, Title } from '../../styles/GlobalStyle'
import Contact from '../../models/Contact'

const EditContact = () => {
  type locationState = {
    state: {
      contactData: Contact
    }
  }
  const location: locationState = useLocation()
  const { contactData } = location.state || {}

  console.log(location.state)

  return (
    <>
      <Aside isEditing />
      <MainContainer flex_direction="column">
        <Title>Edit contact</Title>
        <ContactForm isEditing contact={contactData} />
      </MainContainer>
    </>
  )
}

export default EditContact
