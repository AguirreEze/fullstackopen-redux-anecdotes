import { getAllAnecdotes, postNewAnecdote, postVoteAnecdote } from '../services/anecdotes'

export const anecdoteReducer = (state = [], action) => {
  if (action.type === '@anecdote/init') {
    return action.payload
  }
  if (action.type === '@anecdote/create') {
    return [...state, action.payload]
  }
  if (action.type === '@anecdote/vote') {
    const { id } = action.payload
    return state.map(anec => {
      if (anec.id === id) {
        return action.payload
      }
      return anec
    })
  }

  return state
}

export const voteAnecdote = anecdote => {
  return async dispatch => {
    const res = await postVoteAnecdote(anecdote)
    dispatch({
      type: '@anecdote/vote',
      payload: res
    })
  }
}

export const addNewAnecdote = content => {
  return async dispatch => {
    const anecdote = await postNewAnecdote(content)
    dispatch({
      type: '@anecdote/create',
      payload: anecdote
    })
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAllAnecdotes()
    dispatch({
      type: '@anecdote/init',
      payload: anecdotes

    })
  }
}
