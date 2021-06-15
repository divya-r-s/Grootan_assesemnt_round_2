
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


 let MongoClient = require('mongodb').MongoClient;
 let url = "mongodb://localhost:27017/";

 const csvFilePath='50000 Records.csv'
 const csv=require('csvtojson')

 csv()
 .fromFile(csvFilePath)
 .then((jsonObj)=>{
    console.log(jsonObj);

 		[ 
 		  { _id: '1', name: 'Jack Smith', address: 'Massachusetts', age: '23' },
 		  { _id: '2', name: 'Adam Johnson', address: 'New York', age: '27' },
 		  { _id: '3', name: 'Katherin Carter', address: 'Washington DC', age: '26' },
 		  { _id: '4', name: 'Jack London', address: 'Nevada', age: '33' },
 		  { _id: '5', name: 'Jason Bourne', address: 'California', age: '36' } 
 		]


 	MongoClient.connect(url, { useNewUrlParser: true ,useUnifiedTopology: true }, (err, db) => {
 	  if (err) throw err;
 	  var dbo = db.db("data");
 	  dbo.collection("emp2").insertMany(jsonObj, (err, res) => {
 		if (err) throw err;
 		console.log("Number of documents inserted: " + res.insertedCount);

 		db.close();
 	  });
 	});
 	
 })

