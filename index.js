
var express = require('express');

var http = require('http');

var path = require("path");

var bodyParser = require('body-parser');

var helmet = require('helmet');

var app = express();

var server = http.createServer(app);
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'./')));

app.use(helmet());
app.get('/', function(req,res){

	res.sendFile(path.join(__dirname, './index.html'));
	});
app.post('/upload', function(req,res){


console.log(req.body.user_input);


});
server.listen(3000, function () {

	console.log("Server listening on port: 3000");
});

