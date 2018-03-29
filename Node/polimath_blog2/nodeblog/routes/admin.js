var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: './public/images' })
var mongo = require('mongodb');
var db = require('monk')('localhost/nodeblog');
var auth = require('http-auth');


var basic = auth.basic({
        realm: "Web."
    }, function (username, password, callback) { // Custom authentication method.
        callback(username === "admin12345" && password === "leonardodavinci2308");
    }
);


/* GET home page. */
router.get('/', auth.connect(basic),function(req, res, next) {
  res.render('admin', { title: 'admin' });
});

router.get('/posts', function(req, res, next) {
  res.render('posts', { title: 'posts' });
});

router.get('/goals', function(req, res, next) {
  res.render('goals', { title: 'goals' });
});

router.get('/posts/insert', function(req, res, next) {
  res.render('insert', { title: 'insert' });
});

router.get('/posts/add', function(req, res, next) {
  var categories = db.get('categories');

  categories.find({},{},function(err, categories){
    res.render('addpost',{
        'title': 'Add Post',
        'categories': categories
      });
  });
});
router.post('/add', upload.single('mainimage'), function(req, res, next) {
  // Get Form Values
  var title = req.body.title;
  var category= req.body.category;
  var body = req.body.body;
  var author = req.body.author;
  var date = new Date();

  // Check Image Upload
  if(req.file){
    var mainimage = req.file.filename
  } else {
    var mainimage = 'noimage.jpg';
  }

    // Form Validation
  req.checkBody('title','Title field is required').notEmpty();
  req.checkBody('body', 'Body field is required').notEmpty();

  // Check Errors
  var errors = req.validationErrors();

  if(errors){
    res.render('addpost',{
      "errors": errors
    });
  } else {
    var posts = db.get('posts');
    posts.insert({
      "title": title,
      "body": body,
      "category": category,
      "date": date,
      "author": author,
      "mainimage": mainimage
    }, function(err, post){
      if(err){
        res.send(err);
      } else {
        req.flash('success','Post Added');
        res.location('/');
        res.redirect('/');
      }
    });
  }
});

 // router.post('/add', function(req, res) {
 //   if (!req.body.title || !req.body.text) {
 //     return res.redirect('/');
 //   }
 //   var post = new Post({
 //     title: req.body.title,
 //     text: req.body.text,
 //     date: (new Date())
 //   });
 //   post.save(function(err) {
 //     res.redirect('/admin');
 //   });
 // });

router.get('/posts/edit', function(req, res, next) {
  res.render('goals', { title: 'posts' });
});

router.get('/posts/delete', function(req, res, next) {
  res.render('delete', { title: 'delete' });
});

module.exports = router;
