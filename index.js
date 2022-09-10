require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/words', require('./api/words'));

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
