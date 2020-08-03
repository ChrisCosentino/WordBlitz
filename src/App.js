import React, { useEffect, useState } from 'react';

const App = () => {
  const [countdown, setCountdown] = useState(10);
  const [gameOver, setGameOver] = useState(false);

  const [words, setWords] = useState(['treehouse', 'stamp', 'car', 'state']);
  const [currentWord, setCurrentWord] = useState(0);

  const [timer, setTimer] = useState(null);

  const [correctWords, setCorrectWords] = useState([]);

  // This one keep on local dont put in context
  const [text, setText] = useState('');

  useEffect(() => {
    // Every 1 second, countdown the state var
    // const timer = setTimeout(() => {
    //   if (countdown === 0) {
    //     console.log('Times up');
    //     setGameOver(true);
    //   }
    //   // setCountdown(countdown ? countdown - 1 : 10);
    //   setCountdown(countdown - 1);
    // }, 1000);

    // return () => {
    //   clearTimeout(timer);
    // };
    startTimer();
    console.log(words);
  }, [countdown]);

  // Resets the timer to 10 seconds
  const startTimer = () => {
    setTimer(
      setTimeout(() => {
        if (countdown === 0) {
          console.log('Times up');
          gameEnded();
          return;
        }
        // setCountdown(countdown ? countdown - 1 : 10);
        setCountdown(countdown - 1);
      }, 1000)
    );

    // return () => {
    //   clearTimeout(timer);
    // };
  };

  const resetTimer = () => {
    setTimer(clearTimeout(timer));
  };

  // The correct word. Move to next word
  const correctWord = () => {
    // console.log('correct');
    // console.log(countdown);
    console.log(words[currentWord + 1]);
    //STORE COUNTDOWN
    resetTimer();

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
    setGameOver(true);
  };

  // The text input value
  const handleChange = (e) => {
    setText(e.target.value);

    if (e.target.value === words[currentWord]) {
      correctWord();
    }
  };

  // Game is over, display the gameover
  if (gameOver) {
    return <div>Game Over</div>;
  }

  return (
    <div>
      {countdown}
      <input type='text' onChange={handleChange} value={text} />
    </div>
  );
};

export default App;
