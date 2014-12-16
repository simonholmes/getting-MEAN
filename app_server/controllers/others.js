/* GET 'about us' page */
module.exports.about = function(req, res){
  res.render('generic-text', { title: 'About' });
};
