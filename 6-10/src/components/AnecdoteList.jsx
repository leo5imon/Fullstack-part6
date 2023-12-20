import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch({
        type: 'INCREMENT',
        payload: { id }
        })
    }
    const anecdote = useSelector(state => state.anecdote)
    const filtered = useSelector(state => state.filter)
    let filteredAnecdotes = []

    if (filtered !== '') {
        filteredAnecdotes = anecdote.filter((anec) => anec.content.toLowerCase().startsWith(filtered.filterValue.toLowerCase()))
    } else {
        filteredAnecdotes = anecdote
    }

return (
    <div>
        {filteredAnecdotes
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote =>
        <div key={anecdote.id}>
            <div>
            {anecdote.content}
            </div>
            <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
        </div>
        )}
    </div>
)  
}
export default AnecdoteList