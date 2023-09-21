import { createSlice } from '@reduxjs/toolkit';

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    create(state, action) {
      state.push(action.payload);
    },
    voteAction(state, action) {
      const id = action.payload;
      return state.map((a) => {
        return a.id === id
          ? { ...a, votes: a.votes + 1 }
          : a;
      });
    },
    setAnecdotes(state, action) {
      return action.payload;
    }
  }
})

export const { create, voteAction, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
