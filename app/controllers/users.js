
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , User = mongoose.model('User')
  , uuid = require('node-uuid')
  , fs = require('fs')

exports.signin = function (req, res) {}

/**
 * Auth callback
 */

exports.authCallback = function (req, res, next) {
  res.redirect('/')
}

/**
 * Show login form
 */

exports.login = function (req, res) {
  res.render('users/login', {
    title: 'Login',
    message: req.flash('error')
  })
}

/**
 * Show sign up form
 */

exports.signup = function (req, res) {
  res.render('users/signup', {
    title: 'Sign up',
    user: new User()
  })
}

/**
 * Logout
 */

exports.logout = function (req, res) {
  req.logout()
  res.redirect('/login')
}

/**
 * Session
 */

exports.session = function (req, res) {
  res.redirect('/')
}

/**
 * Create user
 */

exports.create = function (req, res) {
  var user = new User(req.body)
  user.characters.main.name = req.body.charname
  user.characters.main.race = req.body.race
  user.characters.main.role = req.body.role
  user.provider = 'local'
  user.save(function (err) {
    if (err) {
      return res.render('users/signup', { errors: err.errors, user: user })
    }
    req.logIn(user, function(err) {
      if (err) return next(err)
      return res.redirect('/')
    })
  })
}

/**
 * Upload avatar image
 */
exports.uploadAvatar = function(req, res){
  var tmp_path = req.files.avatar.path;
  var target_path = '/img/avatar-upload/'+uuid.v1()+'-'+req.files.avatar.name;
  var type = req.files.avatar.type.split('/')[1];
  if(type === 'jpeg' || type === 'png' || type === 'gif'){
    fs.rename(tmp_path, './public'+target_path,  function(err){
      if(err){
        console.log(err);
      }
      fs.unlink(tmp_path, function(err){
        if(err){
          console.log(err);
        }
        // save image into db
        User.update({_id:req.user._id},{$set:{avatar:target_path}}).exec();
        res.redirect('/users/'+req.user.id);
      });
    });
  } else {
      req.errors = 'You may only upload a JPG / PNG / Gif';
      fs.unlink(tmp_path, function(err){
        if(err){
          console.log(err);
        }
      });
      res.redirect('/users/'+req.user.id);
  }
}

/**
 *  Show profile
 */

exports.show = function (req, res) {
  var user = req.profile
  res.render('users/show', {
    title: user.name,
    user: user
  })
}

/**
 * Find user by id
 */

exports.user = function (req, res, next, id) {
  User
    .findOne({ _id : id })
    .exec(function (err, user) {
      if (err) return next(err)
      if (!user) return next(new Error('Failed to load User ' + id))
      req.profile = user
      next()
    })
}
