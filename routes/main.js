var ctrl = require('../app_server/controllers/main');

module.exports = function (app) {
  app.get('/', ctrl.index);
};