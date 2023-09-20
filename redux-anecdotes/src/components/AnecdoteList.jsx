import { useDispatch, useSelector } from 'react-redux';
import { voteAction } from '../reducers/anecdoteReducer';
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

  const vote = (id, content) => {
    dispatch(voteAction(id));
    dispatch(setNotif(`Voted for: "${content}"`));
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
          vote={() => vote(anecdote.id, anecdote.content)}
        />
      )}
    </div>
  )
}

export default AnecdoteList;
