/* eslint-disable no-case-declarations */
import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    createAnecdote: (state, action) => {
      state.push(action.payload)
    },
    incrementVotes: (state, action) => {
      const id = action.payload
      const anecdote = state.find((anecdote) => anecdote.id === id)
      if (anecdote) {
        anecdote.votes += 1
      }
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdote(state, action) {
      return action.payload
    }
  },
})

export const { createAnecdote, incrementVotes, appendAnecdote, setAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer