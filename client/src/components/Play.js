import React, { useState, useEffect, useContext, useRef } from 'react';
import { Redirect } from 'react-router-dom';

import PlayContext from '../context/play/playContext';
import Leaderboard from './Leaderboard';

const Play = () => {
  const [countdown, setCountdown] = useState(10);
  // const [gameOver, setGameOver] = useState(false);

  // const [words, setWords] = useState(['treehouse', 'stamp', 'car', 'state']);
  const [currentWord, setCurrentWord] = useState(0);

  const [timer, setTimer] = useState(null);

  // const [correctWords, setCorrectWords] = useState([]);

  // This one keep on local dont put in context
  const [text, setText] = useState('');

  const playContext = useContext(PlayContext);

  const {
    getWords,
    addCorrectWord,
    words,
    gameover,
    username,
    setGameover,
  } = playContext;

  useEffect(() => {
    startTimer();
  }, [countdown]);

  useEffect(() => {
    getWords();
  }, []);

  // Resets the timer to 10 seconds
  const startTimer = () => {
    setTimer(
      setTimeout(() => {
        if (countdown === 0) {
          console.log('Times up');
          gameEnded();
          return;
        }
        setCountdown(countdown - 1);
      }, 1000)
    );
  };

  const resetTimer = () => {
    setTimer(clearTimeout(timer));
  };

  // The correct word. Move to next word
  const correctWord = () => {
    resetTimer();
    const w = {
      timeLeft: countdown,
      word: words[currentWord],
    };

    addCorrectWord(w);

    // Check if the next word is empty. If it is end game, if not continue
    if (words[currentWord + 1] === undefined) {
      gameEnded();
    } else {
      setCurrentWord(currentWord + 1);
      setCountdown(10);
      setText('');
    }
  };

  // Game over
  const gameEnded = () => {
    setTimer(clearTimeout(timer));
    setGameover();
    // setGameOver(true);
  };

  // The text input value
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.target.value === words[currentWord]) {
      correctWord();
    }
  };

  if (username === '') {
    resetTimer();
    // return <Redirect to='/' />;
  }

  if (gameover) {
    // resetTimer();
    // return <Leaderboard />;
    return <Redirect to='/leaderboard' />;
  }

  return (
    <div className='container'>
      <h1 className='title noselect'>{playContext.words[currentWord]}</h1>

      <input
        ref={(input) => input && input.focus()}
        type='text'
        onChange={handleChange}
        value={text}
        className='text-input'
        placeholder='Enter the word'
        spellcheck='false'
        autoCapitalize='off'
        autoComplete='off'
        autocorrect='off'
      />
      <div className='tiny'>
        <div className='tiny-container'>
          <span className='tiny-title'>Countdown</span>
          <span className='tiny-value'>{countdown}</span>
        </div>

        <div className='tiny-container'>
          <span className='tiny-title'>Score</span>
          <span className='tiny-value'>{playContext.score}</span>
        </div>
      </div>
    </div>
  );
};

export default Play;
