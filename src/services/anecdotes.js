import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

export const getAllAnecdotes = async () => {
  const res = await axios.get(baseURL)
  return res.data
}

export const postNewAnecdote = async (content) => {
  const anecdote = {
    content,
    votes: 0
  }
  const res = await axios.post(baseURL, anecdote)
  return res.data
}

export const postVoteAnecdote = async anecdote => {
  const newData = {
    ...anecdote,
    votes: anecdote.votes + 1
  }
  const res = await axios.put(`${baseURL}/${anecdote.id}`, newData)
  return res.data
}
