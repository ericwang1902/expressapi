var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var articleSchema = new Schema({	"title" : String,	"content" : String,	"createDate" : Date,	"updateDate" : Date});

module.exports = mongoose.model('article', articleSchema);