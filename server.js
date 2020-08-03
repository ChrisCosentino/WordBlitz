const express = require('express');
const connectDB = require('./config/db');

const path = require('path');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use('/api/words', require('./routes/words'));
app.use('/api/leaderboard', require('./routes/leaderboard'));

// Serve react in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
