// Esse reducer será responsável por tratar as informações da pessoa usuária
import {
  ADD_USER_NAME_TYPE,
  ADD_EMAIL_TYPE,
  GET_SCORE_TYPE,
  GET_ASSERTION_TYPE,
} from '../actions/index';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EMAIL_TYPE:
    // console.log('chegou');
    return {
      ...state,
      gravatarEmail: action.payload,
    };
  case ADD_USER_NAME_TYPE:
    // console.log('chegou');
    return {
      ...state,
      name: action.payload,
    };
  case GET_SCORE_TYPE:
    // console.log('chegou');
    return {
      ...state,
      score: action.payload,
    };
  case GET_ASSERTION_TYPE:
    // console.log('chegou');
    return {
      ...state,
      assertions: action.payload,
    };
  default:
    return state;
  }
};

export default userReducer;
