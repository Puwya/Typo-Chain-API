const { Router } = require('express');
const axios = require('axios');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const Words = await axios.get('https://monkeytype.com/languages/english.json');
    res.status(200).json(Words.data);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
