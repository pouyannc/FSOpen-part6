import { useDispatch, useSelector } from 'react-redux';
import { voteAction } from '../reducers/anecdoteReducer';
import Anecdote from './Anecdote';

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const filtered = filter === ''
      ? anecdotes
      : anecdotes.filter(({ content }) => content.toLowerCase().includes(filter));
    return filtered.sort((a, b) => b.votes - a.votes)
  });
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteAction(id));
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          vote={vote}
        />
      )}
    </div>
  )
}

export default AnecdoteList;
