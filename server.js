const express = require('express');
const cors = require('cors');
const app = express();
const port = 9876;

app.use(cors());

app.get('/numbers/e', (req, res) => {
  res.json({
    windowPrevState: [],
    windowCurrState: [],
    numbers: [2, 4, 6, 8, 10],
    avg: 6
  });
});

app.get('/numbers/p', (req, res) => {
  res.json({
    windowPrevState: [],
    windowCurrState: [],
    numbers: [2, 3, 5, 7, 11],
    avg: 5.6
  });
});

app.get('/numbers/f', (req, res) => {
  res.json({
    windowPrevState: [],
    windowCurrState: [],
    numbers: [1, 1, 2, 3, 5],
    avg: 2.4
  });
});

app.get('/numbers/r', (req, res) => {
  res.json({
    windowPrevState: [],
    windowCurrState: [],
    numbers: [3, 7, 1, 9, 4],
    avg: 4.8
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

