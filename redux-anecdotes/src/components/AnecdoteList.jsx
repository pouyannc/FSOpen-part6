import { useDispatch, useSelector } from 'react-redux';
import { updateVote } from '../reducers/anecdoteReducer';
import Anecdote from './Anecdote';
import { notify } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const filtered = filter === ''
      ? [...anecdotes]
      : anecdotes.filter(({ content }) => content.toLowerCase().includes(filter));
    return filtered.sort((a, b) => b.votes - a.votes)
  });
  const dispatch = useDispatch();

  const vote = (anecdote) => {
    dispatch(updateVote(anecdote));
    dispatch(notify(`Voted for: "${anecdote.content}"`, 5));
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          vote={() => vote(anecdote)}
        />
      )}
    </div>
  )
}

export default AnecdoteList;
