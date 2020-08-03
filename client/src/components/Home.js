import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import PlayContext from '../context/play/playContext';

const Home = () => {
  const [text, setText] = useState('');
  const [redirect, setRedirect] = useState(false);

  const playContext = useContext(PlayContext);

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
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='username' onChange={handleChange} />
    </form>
  );
};

export default Home;
