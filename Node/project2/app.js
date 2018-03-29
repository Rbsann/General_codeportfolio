var express= require ('express');
var path=require('path');
var bodyParser=require('body-parser');
var nodemailer=require('nodemailer');

var app=express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
	res.render('index',{title:'Welcome'});

});

app.get('/about',function(req,res){
	res.render('about');

});

app.get('/contact',function(req,res){
	res.render('contact');

});

app.post('/contact/send',function(req,res){
	var transporter=nodemailer.createTransport({
		service:'Gmail',
		auth:{
			user:'renan.sanches@usp.br',
			pass: 'Labil@unoodles2308'
		}
	});

	var mailOptions={
		from:'Me <renan.sanches@usp.br>',
		to: 'rbsann@gmail.com',
		subject:'Website submission',
		text:'Submission with the following details...Name'+req.body.name+'Email'+req.body.email+'Message:'+req.body.message,
		html:'<p>Submission with the following details </p>'

	};
	transporter.sendMail(mailOptions,function(error,info){
		if(error){
			console.log(error);
			res.redirect('/');

		} else{
			console.log('Message sent'+info.response);
			res.redirect('/');

		}
	});
	console.log('Test');
});


app.listen(3000);

console.log('Server is running on port 3000...');
