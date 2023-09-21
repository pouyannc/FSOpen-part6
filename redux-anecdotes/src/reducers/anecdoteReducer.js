import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes';

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    append(state, action) {
      state.push(action.payload);
    },
    voteAction(state, action) {
      const id = action.payload.id;
      return state.map((a) => {
        return a.id === id
          ? action.payload
          : a;
      });
    },
    setAnecdotes(state, action) {
      return action.payload;
    }
  }
})

export const { append, voteAction, setAnecdotes } = anecdoteSlice.actions;
export const initAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  }
}
export const createNew = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(anecdote);
    dispatch(append(newAnecdote));
  }
}
export const updateVote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.updateVote(anecdote);
    dispatch(voteAction(updatedAnecdote));
  }
}
export default anecdoteSlice.reducer;
