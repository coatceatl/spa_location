module.exports = (app) => {
  app.get('/location', (req, res) => {
    res.send('Page Location');
  });

  app.get('/location/review/new', (req, res) => {
    res.send('Page new review');
  });

  app.get('/about', (req, res) => {
    res.send('ABOUT');
  });
}


