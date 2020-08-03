import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Play from './components/Play';

import PlayState from './context/play/PlayState';

import './styles.css';
import Leaderboard from './components/Leaderboard';

const App = () => {
  // const [countdown, setCountdown] = useState(10);
  // const [gameOver, setGameOver] = useState(false);

  // const [words, setWords] = useState(['treehouse', 'stamp', 'car', 'state']);
  // const [currentWord, setCurrentWord] = useState(0);

  // const [timer, setTimer] = useState(null);

  // const [correctWords, setCorrectWords] = useState([]);

  // // This one keep on local dont put in context
  // const [text, setText] = useState('');

  // useEffect(() => {
  //   startTimer();
  //   console.log(words);
  // }, [countdown]);

  // Resets the timer to 10 seconds
  // const startTimer = () => {
  //   setTimer(
  //     setTimeout(() => {
  //       if (countdown === 0) {
  //         console.log('Times up');
  //         gameEnded();
  //         return;
  //       }
  //       setCountdown(countdown - 1);
  //     }, 1000)
  //   );
  // };

  // const resetTimer = () => {
  //   setTimer(clearTimeout(timer));
  // };

  // // The correct word. Move to next word
  // const correctWord = () => {
  //   // console.log('correct');
  //   // console.log(countdown);
  //   console.log(words[currentWord + 1]);
  //   //STORE COUNTDOWN
  //   resetTimer();

  //   // Check if the next word is empty. If it is end game, if not continue
  //   if (words[currentWord + 1] === undefined) {
  //     gameEnded();
  //   } else {
  //     setCurrentWord(currentWord + 1);
  //     setCountdown(10);
  //     setText('');
  //   }
  // };

  // // Game over
  // const gameEnded = () => {
  //   setTimer(clearTimeout(timer));
  //   setGameOver(true);
  // };

  // // The text input value
  // const handleChange = (e) => {
  //   setText(e.target.value);

  //   if (e.target.value === words[currentWord]) {
  //     correctWord();
  //   }
  // };

  // Game is over, display the gameover
  // if (gameOver) {
  //   return <div>Game Over</div>;
  // }

  return (
    <PlayState>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/play' component={Play} />
          <Route exact path='/leaderboard' component={Leaderboard} />
        </Switch>
      </Router>
    </PlayState>
  );
};

export default App;
