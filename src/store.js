import { createStore } from 'redux'

const initialState = {
  sidebarShow: 'responsive',
  isLogin: false
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    case 'IS_LOGIN':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store