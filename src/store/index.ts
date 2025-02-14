import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './reducers/contacts'
import filterReducer from './reducers/filter'

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
