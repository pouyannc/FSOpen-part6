import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
 const res = await axios.get(baseUrl);
 return res.data;
}

const createNew = async (content) => {
  const object = {
    content,
    votes: 0
  };
  const res = await axios.post(baseUrl, object);
  return res.data;
}

const updateVote = async (anecdoteObj) => {
  const updatedObj = { ...anecdoteObj, votes: anecdoteObj.votes + 1 }
  const res = await axios.put(`${baseUrl}/${updatedObj.id}`, updatedObj);
  return res.data;
}

export default { getAll, createNew, updateVote };
