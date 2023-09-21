import React from 'react'
import { useDispatch } from 'react-redux';
import { createNew } from '../reducers/anecdoteReducer';
import { removeNotif, setNotif } from '../reducers/notificationReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAnecdote = e.target.anecdote.value;
    e.target.anecdote.value = '';

    // const anecdoteObject = await anecdoteService.createNew(newAnecdote);

    dispatch(createNew(newAnecdote));
    dispatch(setNotif(`Created new: "${newAnecdote}"`));
    setTimeout(() => {
      dispatch(removeNotif());
    }, 5000)
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm;
