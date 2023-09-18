import { useDispatch, useSelector } from 'react-redux';
import { voteAction } from '../reducers/anecdoteReducer';
import Anecdote from './Anecdote';

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state);
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
