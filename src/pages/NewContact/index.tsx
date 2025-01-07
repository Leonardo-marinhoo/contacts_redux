import Aside from '../../containers/Aside'
import ContactForm from '../../containers/ContactForm'

import { MainContainer, Title } from '../../styles/GlobalStyle'

const NewContact = () => {
  return (
    <>
      <Aside isEditing />
      <MainContainer flex_direction="column">
        <Title>Create a new contact</Title>
        <ContactForm />
      </MainContainer>
    </>
  )
}

export default NewContact
