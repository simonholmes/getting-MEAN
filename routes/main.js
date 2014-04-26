var ctrl = require('../app_server/controllers/main');

module.exports = function(app){
  app.get('/about', ctrl.about);
  app.get('/signin', ctrl.signin);
};