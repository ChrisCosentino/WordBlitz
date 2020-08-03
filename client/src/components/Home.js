import React, { useState, useContext, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';

import PlayContext from '../context/play/playContext';

const Home = () => {
  const [text, setText] = useState('');
  const [redirect, setRedirect] = useState(false);

  const playContext = useContext(PlayContext);

  useEffect(() => {
    // reset all state variables
    playContext.clearGame();
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
        <h1 className='title'>Word Eater</h1>
        <input
          ref={(input) => input && input.focus()}
          className='text-input'
          type='text'
          placeholder='Enter a username'
          onChange={handleChange}
          required
          spellcheck='false'
          autoCapitalize='off'
          autoComplete='off'
          autocorrect='off'
        />
        <input type='submit' value='Enter' className='btn' />
      </form>
    </div>
  );
};

export default Home;
