import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import PlayContext from '../context/play/playContext';

const Home = () => {
  const [text, setText] = useState('');
  const [redirect, setRedirect] = useState(false);

  const playContext = useContext(PlayContext);

  useEffect(() => {
    // reset all state variables
    playContext.clearGame();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playContext.setUsername(text);
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to='/play' />;
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='form-container'>
        <h1 className='title'>Word Blitz</h1>
        <input
          ref={(input) => input && input.focus()}
          className='text-input'
          type='text'
          placeholder='Enter a username'
          onChange={handleChange}
          required
          spellCheck='false'
          autoCapitalize='off'
          autoComplete='off'
          autoCorrect='off'
        />
        <input type='submit' value='Enter' className='btn' />
      </form>
    </div>
  );
};

export default Home;
