const express = require('express');
const router = express.Router();

const Score = require('../models/Score');

// @Route   GET api/leaderboard
// @desc    Get top 50 in leaderboard
// @access  Public
router.get('/', async (req, res) => {
  try {
    let score = await Score.find().sort({ score: 'desc' }).limit(15);
    res.send(score);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @Route   POST api/leaderboard
// @desc    Post score in database
// @access  Public
router.post('/', async (req, res) => {
  const { score, username } = req.body;

  try {
    let s = new Score({
      score,
      username,
    });

    s.save();

    res.send({ msg: 'success' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
