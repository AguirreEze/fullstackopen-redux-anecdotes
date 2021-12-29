
export const filterReducer = (store = '', action) => {
  if (action.type === '@filter/set') {
    return action.payload
  }
  return store
}

export const setFilter = (text) => {
  return {
    type: '@filter/set',
    payload: text
  }
}
