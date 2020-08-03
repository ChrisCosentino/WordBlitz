const express = require('express');
const router = express.Router();

var randomWords = require('random-words');

// @Route   GET api/words
// @desc    Generate a list of 50 random words
// @access  Public
router.get('/', (req, res) => {
  // console.log(randomWords({exactly:5, wordsPerString:2, separator:'-'}))
  // [ 'equator-variety', 'salt-usually', 'importance-becoming', 'stream-several', 'goes-fight' ]
  try {
    return res.send(randomWords({ exactly: 15, minLength: 5 }));
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
