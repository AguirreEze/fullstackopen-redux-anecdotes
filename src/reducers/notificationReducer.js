
export const notificationReducer = (state = '', action) => {
  if (action.type === '@notification/show') {
    return action.payload
  }
  if (action.type === '@notification/hide') {
    return ''
  }
  return state
}

export const setNotification = (notification, time) => {
  return dispatch => {
    dispatch({
      type: '@notification/show',
      payload: notification
    })
    setTimeout(() => {
      dispatch({
        type: '@notification/hide'
      })
    }, time * 1000)
  }
}
