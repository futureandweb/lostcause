/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
	, Schema = mongoose.Schema
	, _ = require('underscore');

/**
 * FeatMember Schema
 */
var FeatMember = new Schema({
	userid: String,
	name: String,
	guildid: String
});

mongoose.model('FeaturedMember', FeatMember);