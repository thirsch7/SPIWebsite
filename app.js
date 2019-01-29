var express = require('express');
var app = express();
var server = require('http').Server(app);

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'studentpolicyinitiative@gmail.com',
    pass: 'opportunityblNOT'
  }
});



var path = require('path');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/views')));

app.use(express.urlencoded());

server.listen(8000);

app.get('/opportunityblock', function(req, res){
	res.render('projects/opportunityblock.html');
});

app.post('/signupform', function(req, res){
	console.log('sign up form received');
	var name = req.body.name;
	var email = req.body.email;
	var comments = req.body.comments;
	var mailOptions = {
		from: 'studentpolicyinitiative@gmail.com',
		to: 'studentpolicyinitiative@gmail.com',
		subject: 'Signup Form Response',
		text: 'Name: ' + name + '\nEmail: ' + email + '\nComments: ' + comments
	};
	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
	res.redirect('response.html');
	res.end('');
});

app.post('/projectform', function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var member = req.body.member;
	var proj = req.body.topic;
	var comments = req.body.comments;
	var mailOptions = {
		from: 'studentpolicyinitiative@gmail.com',
		to: 'studentpolicyinitiative@gmail.com',
		subject: 'Project Form Response',
		text: 'Name: ' + name + '\nEmail: ' + email + '\nMember: ' + member + '\nProject Topic: ' + proj + '\nComments: ' + comments
	};
	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
	res.redirect('response.html');
	res.end('');
});

app.post('/chapterform', function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var phone = req.body.phone;
	var school = req.body.school;
	var comments = req.body.comments;
	var mailOptions = {
		from: 'studentpolicyinitiative@gmail.com',
		to: 'studentpolicyinitiative@gmail.com',
		subject: 'Chapter Form Response',
		text: 'Name: ' + name + '\nEmail: ' + email + '\nPhone Number: ' + phone + '\nComments: ' + comments
	};
	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
	res.redirect('response.html');
	res.end('');
});