import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: { notificationValue: 'test' },
    reducers: {
      notificationSet: (state, action) => {
        state.notificationValue = action.payload
      },
    },
})

export const { notificationSet } = notificationSlice.actions
export default notificationSlice.reducer