/* GET 'about us' page */
module.exports.about = function(req, res){
  res.render('generic-text', { title: 'About' });
};

/* GET 'sign in' page */
module.exports.signin = function(req, res){
  res.render('signin-index', { title: 'Sign in' });
};
