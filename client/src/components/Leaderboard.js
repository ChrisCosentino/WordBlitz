import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import PlayContext from '../context/play/playContext';

const Leaderboard = () => {
  const [standings, setStandings] = useState([]);

  const playContext = useContext(PlayContext);

  useEffect(() => {
    axios.get('/api/leaderboard').then((res) => setStandings(res.data));
  }, []);

  return (
    <div className='leaderboard'>
      <div className='score-container'>
        <h1 className='title'>Your Score: {playContext.score}</h1>
      </div>
      <h1 className='title'>Leaderboard</h1>
      <ol>
        {standings.map((user) => (
          <li key={user._id}>
            {playContext.username === user.username ? (
              <span className='player-name' style={{ color: 'yellow' }}>
                {user.username}
              </span>
            ) : (
              <span className='player-name'>{user.username}</span>
            )}
            {' - '}
            <span className='player-score'>{user.score}</span>
          </li>
        ))}
      </ol>
      <Link className='btn' style={{ textDecoration: 'none' }} to='/'>
        Restart
      </Link>
    </div>
  );
};

export default Leaderboard;
