import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filterValue: '' },
  reducers: {
    filterChange: (state, action) => {
      state.filterValue = action.payload
    },
  },
})

export const { filterChange } = filterSlice.actions
export default filterSlice.reducer