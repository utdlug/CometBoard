var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

exports.Post = new Schema({
  title: String,
  body: String
});
