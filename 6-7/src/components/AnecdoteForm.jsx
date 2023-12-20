import {  useDispatch } from 'react-redux'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdotes = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch({
            type: 'NEW_ANECDOTE',
            payload: { content }
        })
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