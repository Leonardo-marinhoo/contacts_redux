import { createSlice } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactState = {
  items: Contact[]
}

const initialState: ContactState = {
  items: [
    {
      id: 1,
      name: 'Leonardo',
      surname: 'Marinho',
      email: 'leo.ccodes@gmail.com',
      phone: '(12)991655701'
    },
    {
      id: 2,
      name: 'Cunha',
      surname: 'Marinho',
      email: 'leomarinhohh@gmail.com',
      phone: '(12)991655701'
    }
  ]
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {}
})

export default contactSlice.reducer
