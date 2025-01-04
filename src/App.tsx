import Aside from './containers/Aside'
import ContactList from './containers/ContactList'
import { Container, GlobalStyle } from './styles/GlobalStyle'

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Aside />
      <ContactList />
    </Container>
  )
}

export default App
