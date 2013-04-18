
var mongoose = require('mongoose')
  , Article = mongoose.model('Article')
  , User = mongoose.model('User')
  , async = require('async')

module.exports = function (app, passport, auth, roles) {

  // Role Strategies
  // Anonymous users can access 'anon access'
  app.use(function(req,action){
    if(!req.user.isAuthenticated) return action === 'anon access';
  });
  // requires logged in to access
  app.use('logged in', function(req){
    if(req.user.isAuthenticated){
      return true;
    }
  });
  // Moderators or higher can access these pages
  app.use('moderator', function(req){
    if(req.user.role === 'moderator'){
      return true;
    }
  });
  // Admin can access all pages
  roles.use(function(req){
    if(req.user.role === 'admin'){
      return true;
    }
  });

  // Set the Access denied page
  roles.setFailureHandler(function(req,res,action){
    var accept = req.headers.accept || '';
    res.status(403);
    if(~accept.indexOf('html')){
      res.render('users/login',{message:'You do not have sufficient permssion to perform this action.'});
    } else {
      res.send('Access Denied - You don\'t have permission to: '+action);
    }
  });

  // user routes
  var users = require('../app/controllers/users')
  app.get('/login', users.login)
  app.get('/signup', users.signup)
  app.get('/logout', users.logout)
  app.post('/users', users.create)
  app.post('/users/session', passport.authenticate('local', {failureRedirect: '/login', failureFlash: 'Invalid email or password.'}), users.session)
  app.get('/users/:userId', users.show)
  app.get('/auth/facebook', passport.authenticate('facebook', { scope: [ 'email', 'user_about_me'], failureRedirect: '/login' }), users.signin)
  app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), users.authCallback)
  app.get('/auth/github', passport.authenticate('github', { failureRedirect: '/login' }), users.signin)
  app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), users.authCallback)
  app.get('/auth/twitter', passport.authenticate('twitter', { failureRedirect: '/login' }), users.signin)
  app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), users.authCallback)
  app.get('/auth/google', passport.authenticate('google', { failureRedirect: '/login', scope: 'https://www.google.com/m8/feeds' }), users.signin)
  app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login', scope: 'https://www.google.com/m8/feeds' }), users.authCallback)

  app.param('userId', users.user)
  app.post('/avatar/upload', roles.is('logged in'), users.uploadAvatar);

  // article routes
  var articles = require('../app/controllers/articles')
  app.get('/articles', articles.index)
  app.get('/articles/new', roles.is('moderator'), articles.new)
  app.post('/articles', roles.is('moderator'), articles.create)
  app.get('/articles/:id', articles.show)
  app.get('/articles/:id/edit', roles.is('moderator'), auth.article.hasAuthorization, articles.edit)
  app.put('/articles/:id', roles.is('moderator'), auth.article.hasAuthorization, articles.update)
  app.del('/articles/:id', roles.is('moderator'), auth.article.hasAuthorization, articles.destroy)

  app.param('id', articles.article)

  // home route
  app.get('/', articles.index)

  // comment routes
  var comments = require('../app/controllers/comments')
  app.post('/articles/:id/comments', auth.requiresLogin, comments.create)

  // tag routes
  var tags = require('../app/controllers/tags')
  app.get('/tags/:tag', tags.index)

}
