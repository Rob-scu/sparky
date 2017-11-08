const actions = {
  doIt: 'DO_IT',
  fourMinusOne: 'FOUR_MINUS_ONE',
  toggleSort: 'TOGGLE_SORT',
  changeSortBy: 'CHANGE_SORT_BY',
  receiveCampers: 'GETA_DA_CAMPERSA',
  allTimeCampers: 'ALL_TIME_CAMPERS',
}

// export const simpleActionCreator = () => {
//   return { type: actions.doIt }
// }

// ACTION CREATOR:
export const changeSortBy = payload => {
  console.log(payload)
  return { type: actions.changeSortBy, sortBy: payload.sortBy }
}

export const receiveCampers = campers => {
  return { type: actions.receiveCampers, payload: campers }
}

// export function allTimeCampers(campers) {
//   return {
//     type: actions.allTimeCampers,
//     payload: campers,
//   }
// }

const initialState = {
  asc: 1,
  sortBy: 'username',
}

// REDUCER:
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.changeSortBy:
      const sortBy = state.sortBy
      console.log(state, action, sortBy)
      if (sortBy === action.sortBy) {
        // console.log('reverse')
        return { ...state, asc: state.asc * -1 }
      }
      return { ...state, sortBy: action.sortBy }
    case 'HOME':
      // console.log('Welcome home!')
      return state
    case actions.receiveCampers:
      return { ...state, campers: action.payload }
    case actions.allTimeCampers:
      return { ...state, campers: action.payload }
    default:
      return state
  }
}
