import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'
import { Tags } from '../../utils/enums/tags'

type ContactState = {
  items: Contact[]
}

const initialState: ContactState = {
  items: [
    {
      id: 1,
      name: 'Leonardo',
      surname: 'Marinho',
      email: 'emails@gmail.com',
      phone: '129999999',
      description: 'Front-End Developer',
      tag: Tags.BUSINESS
    },
    {
      id: 2,
      name: 'Leo',
      surname: 'Cunha',
      email: 'mail@gmail.com',
      phone: '129999999',
      description: 'Unity C# Dev',
      tag: Tags.FAVORITE
    },
    {
      id: 3,
      name: 'Geraldo',
      surname: 'José',
      email: 'mail@gmail.com',
      phone: '129999999',
      description: 'Engineer',
      tag: Tags.FRIEND
    }
  ]
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContact: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const lastContact = state.items[state.items.length - 1]
      const newId = lastContact ? lastContact.id + 1 : 1
      const newTask = {
        ...action.payload,
        id: newId
      }
      state.items.push(newTask)
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.items.findIndex((c) => c.id === action.payload.id)
      state.items[index] = action.payload
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((c) => c.id !== action.payload)
    }
  }
})

export const { createContact, updateContact, deleteContact } =
  contactSlice.actions
export default contactSlice.reducer
