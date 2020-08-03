import {
  GET_WORDS,
  ADD_CORRECT_WORD,
  SET_USERNAME,
  SET_GAMEOVER,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_WORDS:
      return {
        ...state,
        words: action.payload,
      };
    case ADD_CORRECT_WORD:
      return {
        ...state,
        correctWords: action.payload.correctWords,
        score: action.payload.score,
      };
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case SET_GAMEOVER:
      return {
        ...state,
        gameover: true,
      };
    default:
      return state;
  }
};
