import React, { useReducer } from 'react';
import axios from 'axios';

import PlayContext from './playContext';
import PlayReducer from './playReducer';

import {
  ADD_CORRECT_WORD,
  GET_WORDS,
  SET_USERNAME,
  SET_GAMEOVER,
} from '../types';

const PlayState = (props) => {
  const initialState = {
    username: '',
    words: [],
    correctWords: [],
    score: 0,
    gameover: false,
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
    state.score += word.timeLeft + word.word.length;
    dispatch({
      type: ADD_CORRECT_WORD,
      payload: {
        correctWords: state.correctWords,
        score: state.score,
      },
    });
  };

  // get words
  const getWords = async () => {
    const res = await axios.get('/api/words');

    dispatch({
      type: GET_WORDS,
      payload: res.data,
    });
  };

  // set gameover
  const setGameover = async () => {
    axios
      .post('api/leaderboard', {
        username: state.username,
        score: state.score,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err.message);
      });

    dispatch({
      type: SET_GAMEOVER,
    });
  };

  // generate a score
  const getScore = () => {};

  return (
    <PlayContext.Provider
      value={{
        username: state.username,
        setUsername,
        correctWords: state.correctWords,
        addCorrectWord,
        getWords,
        words: state.words,
        score: state.score,
        setGameover,
        gameover: state.gameover,
      }}>
      {props.children}
    </PlayContext.Provider>
  );
};

export default PlayState;
