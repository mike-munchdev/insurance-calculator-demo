if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const path = require('path');

(async () => {
  // initialize server
  const app = express();

  app.use(express.static(path.join(__dirname, 'client/build')));
  app.use(express.static(path.join(__dirname, 'public')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });

  const PORT = Number(process.env.PORT) || 4001;

  app.listen(PORT, async () => {
    console.log(`server started on port ${PORT}`);
  });
})();
