import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tags } from '../../utils/enums/tags'

type filterState = {
  query?: string
  type: 'All' | 'Tag'
  tag?: Tags.BUSINESS | Tags.FAVORITE | Tags.FRIEND | Tags.OTHERS
}

const initialState: filterState = {
  query: '',
  type: 'All'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
    setFilter: (state, action: PayloadAction<filterState>) => {
      state.tag = action.payload.tag
      state.type = action.payload.type
    }
  }
})

export const { changeQuery, setFilter } = filterSlice.actions
export default filterSlice.reducer
