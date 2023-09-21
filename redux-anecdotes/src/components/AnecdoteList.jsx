import { useDispatch, useSelector } from 'react-redux';
import { updateVote } from '../reducers/anecdoteReducer';
import Anecdote from './Anecdote';
import { removeNotif, setNotif } from '../reducers/notificationReducer';

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
    dispatch(setNotif(`Voted for: "${anecdote.content}"`));
    setTimeout(() => {
      dispatch(removeNotif());
    }, 5000)
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
