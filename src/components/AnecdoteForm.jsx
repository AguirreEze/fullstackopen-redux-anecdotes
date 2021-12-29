import React from 'react'
import { useDispatch } from 'react-redux'
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleCreateAnecdote = (e) => {
    e.preventDefault()
    const anecdote = e.target.anecdote.value
    e.target.anecdote.value = ''
    dispatch(addNewAnecdote(anecdote))
    dispatch(showNotification(`Created ${anecdote}`))
  }
  return (
      <form onSubmit={handleCreateAnecdote}>
        <h2>create new</h2>
        <div><input name={'anecdote'} /></div>
        <button>create</button>
      </form>
  )
}

export default AnecdoteForm
