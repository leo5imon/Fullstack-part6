import {  useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationSet, notificationRemove } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdotes = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(notificationSet(`${content} added as an anecdote`))
        setTimeout(() => {
            dispatch(notificationRemove())
          }, 5000)
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