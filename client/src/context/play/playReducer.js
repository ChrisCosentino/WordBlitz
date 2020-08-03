import {
  GET_WORDS,
  ADD_CORRECT_WORD,
  SET_USERNAME,
  SET_GAMEOVER,
  CLEAR_GAME,
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
    case CLEAR_GAME:
      return {
        username: action.payload.username,
        words: action.payload.words,
        score: action.payload.score,
        gameover: action.payload.gameover,
        correctWords: action.payload.correctWords,
      };
    default:
      return state;
  }
};
