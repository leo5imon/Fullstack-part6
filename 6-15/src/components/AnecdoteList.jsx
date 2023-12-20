import { useSelector, useDispatch } from 'react-redux'
import { incrementVotes } from '../reducers/anecdoteReducer'
import { notificationSet, notificationRemove } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(incrementVotes(id))
        dispatch(notificationSet(`You voted for an anecdote`))
        setTimeout(() => {
            dispatch(notificationRemove())
          }, 5000)
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