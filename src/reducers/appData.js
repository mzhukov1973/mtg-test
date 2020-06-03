/*React*/
import { APP_ACTIONS } from '../actions'



const appData = (state = {}, action) => {
  switch(action.type)
  {
    case APP_ACTIONS.SET_ACT_TAB:
     return Object.assign({}, state, {activeTabIndex: action.value})

    case APP_ACTIONS.SET_FRST_DROP:
     return Object.assign({}, state, {firstSelectOptionIdx: action.value})

    case APP_ACTIONS.SET_SCND_OPTS:
     return Object.assign({}, state, {secondSelectOptions: [...action.value]})

    default:
     return state
  }
}

export default appData
