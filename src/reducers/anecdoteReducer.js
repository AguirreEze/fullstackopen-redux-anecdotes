import { getAllAnecdotes } from '../services/anecdotes'

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
        return {
          ...anec,
          votes: anec.votes + 1
        }
      }
      return anec
    })
  }

  return state
}

export const voteAnecdote = id => {
  return {
    type: '@anecdote/vote',
    payload: {
      id
    }
  }
}

export const addNewAnecdote = content => {
  return {
    type: '@anecdote/create',
    payload: content
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
