import React from 'react'
import { useDispatch } from 'react-redux';
import { create } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAnecdote = e.target.anecdote.value;
    e.target.anecdote.value = '';

    dispatch(create(newAnecdote));
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
