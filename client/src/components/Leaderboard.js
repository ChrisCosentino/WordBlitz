import React, { useEffect } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  useEffect(() => {
    axios.get('/api/leaderboard').then((res) => console.log(res.data));
  }, []);

  return <div>Leaderboard</div>;
};

export default Leaderboard;
