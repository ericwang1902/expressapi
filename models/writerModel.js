var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var writerSchema = new Schema({	"name" : String,	"age" : Number});

module.exports = mongoose.model('writer', writerSchema);