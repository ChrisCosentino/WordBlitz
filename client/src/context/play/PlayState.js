import React, { useReducer } from 'react';

import PlayContext from './playContext';
import PlayReducer from './playReducer';

import { ADD_CORRECT_WORD, GET_WORDS, SET_USERNAME } from '../types';

const PlayState = (props) => {
  const initialState = {
    username: '',
    words: [],
    correctWords: [],
  };

  const [state, dispatch] = useReducer(PlayReducer, initialState);

  // set username
  const setUsername = (username) => {
    dispatch({
      type: SET_USERNAME,
      payload: username,
    });
  };

  // add a correct word. Takes in a word object
  const addCorrectWord = (word) => {
    state.correctWords.push(word);
    dispatch({
      type: ADD_CORRECT_WORD,
      payload: state.correctWords,
    });
  };

  // get words

  return (
    <PlayContext.Provider
      value={{
        username: state.username,
        setUsername,
        correctWords: state.correctWords,
        addCorrectWord,
      }}>
      {props.children}
    </PlayContext.Provider>
  );
};

export default PlayState;
