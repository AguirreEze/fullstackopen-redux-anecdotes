export const notificationReducer = (state = '', action) => {
  if (action.type === '@notification/show') {
    return action.payload
  }
  if (action.type === '@notification/hide') {
    return ''
  }
  return state
}

export const showNotification = (notification) => {
  return {
    type: '@notification/show',
    payload: notification
  }
}

export const hideNotification = (notification) => {
  return {
    type: '@notification/hide'
  }
}
