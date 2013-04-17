
/*
 *  Generic require login routing middleware
 */

exports.requiresLogin = function (req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  next();
};

/*
*  Check if Admin
 */
exports.requiresAdmin = function(req, res, next) {
  console.log(req.user);
  if(req.game.ranks[req.user.userlevel].value < 50){
    return res.redirect('/articles');

  }
  next();
}


/*
 *  User authorizations routing middleware
 */

exports.user = {
    hasAuthorization : function (req, res, next) {
      if (req.profile.id != req.user.id) {
        return res.redirect('/users/'+req.profile.id);
      }
      next();
    }
};


/*
 *  Article authorizations routing middleware
 */

exports.article = {
    hasAuthorization : function (req, res, next) {
      if (req.article.user.id != req.user.id) {
        return res.redirect('/articles/'+req.article.id);
      }
      next();
    }
};
