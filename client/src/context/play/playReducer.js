import { GET_WORDS, ADD_CORRECT_WORD, SET_USERNAME } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_WORDS:
      return {
        ...state,
      };
    case ADD_CORRECT_WORD:
      return {
        ...state,
        correctWords: action.payload,
      };
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
