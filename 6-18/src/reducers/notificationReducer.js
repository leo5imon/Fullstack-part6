import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: { notificationValue: '' },
    reducers: {
      notificationSet: (state, action) => {
        state.notificationValue = action.payload
      },
      notificationRemove : (state, action) => {
        state.notificationValue = ''
      },
    },
})

export const { notificationSet, notificationRemove } = notificationSlice.actions
export default notificationSlice.reducer