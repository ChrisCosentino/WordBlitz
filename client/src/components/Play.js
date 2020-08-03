import React, { useState, useEffect, useContext } from 'react';
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

  const { getWords, addCorrectWord, words, gameover, username } = playContext;

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
      word: playContext.words[currentWord],
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
    playContext.setGameover();
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
    return <Redirect to='/' />;
  }

  if (gameover) {
    // resetTimer();
    return <Leaderboard />;
  }

  return (
    <div>
      {countdown}
      <input type='text' onChange={handleChange} value={text} />
      {playContext.words[currentWord]}
      {playContext.score}
    </div>
  );
};

export default Play;
