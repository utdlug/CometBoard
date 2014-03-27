var Post = require('../models/post.js');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.new = function(req, res){
  res.render('posts/new', { title: 'New post' });
};

exports.create = function(req, res){
  console.log(req.body);
  res.send(req.params);
};
