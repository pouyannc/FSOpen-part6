import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

export const getAnecdotes = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
}