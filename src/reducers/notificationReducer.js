
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
  return async dispatch => {
    await setTimeout(() => {
      dispatch({
        type: '@notification/hide'
      })
    }, time * 1000)
    return dispatch({
      type: '@notification/show',
      payload: notification
    })
  }
}
