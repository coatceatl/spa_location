const express = require('express');

const app = express();

require('./serverside/routes/routes.js')(app);

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('server started');
})
