var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var writer = require('./writerModel');

var articleSchema = new Schema({
	"title" : String,
	"content" : String,
	"createDate" : Date,
	"updateDate" : Date,
	"writer":{type:Schema.Types.ObjectId,ref:'writer'}
});

module.exports = mongoose.model('article', articleSchema);