function init (express, app) {

  app.get('/hello', (req, res) => res.send('Hello World'))

}

module.exports = { init }
