var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser =require('body-parser')
var multer = require('multer');
//registration
function register(){
    var getLogin=function(user_obj){
        var login = Object.keys(user_obj)[0];
        addToUserList(login,user_obj);
        
    }
    var addToUserList=function(login,user_obj){
        var userList= JSON.parse(fs.readFileSync(__dirname + '/json/user-list.json', 'utf8'));

        if(!userList[login]){
            userList.push(user_obj);
            console.log(userList);
            return("ok");
        }
        else{
            console.log("invalid login");
            return("invalid login");
        }
    }
    var checkStatus=function(login){
        var userList= JSON.parse(fs.readFileSync(__dirname + '/json/user-list.json', 'utf8'));
        if(userList.userList[login]){
        //userList.push(user_obj);
            //sendMessage("zajete");
            console.log("ok");
            return("ok");
        }   
    }
  
}

/*dodaj w przyszłości

var data = "do shash'owania";
var crypto = require('crypto');
crypto.createHash('md5').update(data).digest("hex");
//funkcja skrótu


*/



//registration
//app.use(require('connect').bodyParser());
app.use(bodyParser.json());
//app.use(multer);
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/*
fs.readFile('./json/name-id.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});
*/

app.post('/get_data', function(req, res){
     var params =  '{"name":"jan","id":"hg"}';
    //var obj2=JSON.parse(req.body);
	//var obj2 = JSON.parse(fs.readFileSync(__dirname + '/json/name-id.json', 'utf8'));
    console.log(req.body);
   // console.log(obj2);
    res.send(params);
});
     
app.get('/', function(req, res){
  //res.send('Hello World');

//res.send(obj.name);
	//app.use(express.static('public'));
	res.sendFile( __dirname + '/public/client.html');
	//res.sendFile( __dirname + '/public/js/main.js');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

