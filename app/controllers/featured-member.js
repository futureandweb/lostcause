/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
	, FeatMember = mongoose.model('FeaturedMember')
	, User = mongoose.model('User');

exports.getFeaturedMember = function(req, res, next){
	FeatMember.find(function(err, featmembers){
		if(err) {
			console.log(featmembers);
			return next();
		}
		User.findOne({ _id: featmembers[0].userid }, function (err, user) {
        	if (err) { return next() }
        	if (!user) {
        	  return next()
        	}
        	if (!user.authenticate(password)) {
        	  return next()
        	}
        	req.featuredMember = user;
        	return next()
      	})
	})
}