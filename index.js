const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on the ${PORT}`));


// This can solve /GET error, it's a problem with react router
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })