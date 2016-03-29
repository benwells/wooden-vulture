module.exports = function(app) {

  app.get('/', function (req, res) {
    res.render('index.jade', { pageCountMessage : null});
  });

  app.get('/api/test', function (req, res) {
    res.json({ "data": "Hello There!" });
  });
};
