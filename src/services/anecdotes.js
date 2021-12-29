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
