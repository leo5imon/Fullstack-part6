import {  useDispatch } from 'react-redux'
import { notificationSet } from '../reducers/notificationReducer'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdotes = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(notificationSet(`${content} added as an anecdote`, 2))
    }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={addAnecdotes}>
            <div><input name="anecdote" /></div>
            <button type="submit">create</button>
            </form>
        </>
    )
}

export default AnecdoteForm