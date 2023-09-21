import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

export const getAnecdotes = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
}

export const createAnecdote = async (anec) => {
  const res = await axios.post(baseUrl, anec);
  return res.data;
}

export const updateAnecdote = async (anec) => {
  const res = await axios.put(`${baseUrl}/${anec.id}`, anec);
  return res.data;
}