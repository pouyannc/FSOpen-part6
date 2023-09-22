import { useContext } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createAnecdote } from '../requests';
import NotifContext from './NotificationContext';

const AnecdoteForm = () => {
  const [notif, notifDispatch] = useContext(NotifContext);

  const queryClient = useQueryClient();
  const newAnecMutation = useMutation(createAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] });
    },
    onError: () => {
      notifDispatch({ type: 'SHOW', payload: `Error: anecdote must be at least 5 characters long` });
      setTimeout(() => {
        notifDispatch({ type: 'HIDE' });
      }, 5000);
    }
  });

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecMutation.mutate({ content, votes: 0 })
    notifDispatch({ type: 'SHOW', payload: `Created new: ${content}` });
    setTimeout(() => {
      notifDispatch({ type: 'HIDE' });
    }, 5000);
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
