import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => { dispatch(hideNotification()) }, 5000)
  }
  , [notification])
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    notification === ''
      ? null
      : (
        <div style={style}>
          {notification}
        </div>
        )
  )
}

export default Notification
