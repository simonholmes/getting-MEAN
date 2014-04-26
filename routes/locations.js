var ctrl = require('../app_server/controllers/locations');

module.exports = function(app){
  app.get('/', ctrl.homelist);
  app.get('/location', ctrl.locationInfo);
  app.get('/location/review/new', ctrl.addReview);
};