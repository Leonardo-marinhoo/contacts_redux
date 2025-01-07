import EditContact from './pages/EditContact'
import Home from './pages/Home'
import NewContact from './pages/NewContact'
import { Container, GlobalStyle } from './styles/GlobalStyle'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const Routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'new_contact',
      element: <NewContact />
    },
    {
      path: 'edit_contact',
      element: <EditContact />
    }
  ])

  return (
    <Container>
      <GlobalStyle />
      <RouterProvider router={Routes} />
    </Container>
  )
}

export default App
