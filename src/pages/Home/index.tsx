import Aside from '../../containers/Aside'
import ContactList from '../../containers/ContactList'
import History from '../../containers/History'
import { MainContainer } from '../../styles/GlobalStyle'

const Home = () => {
  return (
    <>
      <Aside />
      <MainContainer flex_direction="row">
        <ContactList />
        <History />
      </MainContainer>
    </>
  )
}

export default Home
