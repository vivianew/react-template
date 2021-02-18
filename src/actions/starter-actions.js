import {
  STARTER_ACTION,
} from '../redux/modules/starter-reducer';

export const updateStarterValue = (value) => (dispatch) => {
  dispatch({
    type: STARTER_ACTION,
    starter: value,
  })
}