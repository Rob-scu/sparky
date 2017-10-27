const actions = {
  doIt: 'DO_IT',
  fourMinusOne: 'FOUR_MINUS_ONE',
  toggleSort: 'TOGGLE_SORT',
  changeSortBy: 'CHANGE_SORT_BY',
}

export const simpleActionCreator = () => {
  return { type: actions.doIt }
}

export const toggleSortOrder = () => {
  return { type: actions.toggleSort }
}

export const changeSortBy = payload => {
  console.log(payload)
  return { type: actions.changeSortBy, sortBy: payload.sortBy }
}

const initialState = {
  asc: 1,
  sortBy: 'username',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.changeSortBy:
      const sortBy = state.sortBy
      console.log(state, action, sortBy)
      if (sortBy === action.sortBy) {
        console.log('reverse')
        return { ...state, asc: state.asc * -1 }
      }
      return { ...state, sortBy: action.sortBy }

    default:
      return state
  }
}
