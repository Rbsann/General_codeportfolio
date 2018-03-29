var express = require('express');
var router = express.Router();
var Post = require('../post');
var session = require('express-session');
router.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));
// var auth = require('http-auth');
// // var basic = auth.basic({
// //         realm: "Web."
// //     }, function (username, password, callback) { // Custom authentication method.
// //         callback(username === "admin12345" && password === "leonardodavinci2308");
// //     }
// // );

var auth = function(req, res, next) {
  if (req.session && req.session.user === "amy" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
};
 
// Login endpoint
router.get('/login', function (req, res) {
  if (!req.query.username || !req.query.password) {
    res.send('login failed');    
  } else if(req.query.username === "admin12345" || req.query.password === "leonardodavinci2308") {
    req.session.user = "amy";
    req.session.admin = true;
    res.send("login success!");
    res.redirect("")
  }
});
 
// Logout endpoint
router.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
  res.redirect('/index');
});


/* GET home page. */
router.get('/', auth,function(req, res, next) {
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


 router.post('/add', function(req, res) {
   if (!req.body.title || !req.body.text) {
     return res.redirect('/');
   }
   var post = new Post({
     title: req.body.title,
     text: req.body.text,
     date: (new Date())
   });
   post.save(function(err) {
     res.redirect('/admin');
   });
 });

router.get('/posts/edit', function(req, res, next) {
  res.render('goals', { title: 'posts' });
});

router.get('/posts/delete', function(req, res, next) {
  res.render('delete', { title: 'delete' });
});

module.exports = router;
