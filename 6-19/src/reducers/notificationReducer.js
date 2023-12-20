import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: { notificationValue: null },
    reducers: {
      notificationSet: (state, action) => {
        const { message, timeInSeconds } = action.payload
        state.notificationValue = message
        setTimeout(() => {
          state.notificationValue = null
        }, timeInSeconds * 1000);
    }
}})

export const { notificationSet } = notificationSlice.actions
export default notificationSlice.reducer