var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var writerSchema = new Schema({

module.exports = mongoose.model('writer', writerSchema);