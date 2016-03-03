var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser =require('body-parser')
var multer = require('multer');
app.use(bodyParser.json());
//app.use(multer);
app.use(bodyParser.urlencoded({ extended: false })); // for parsing
//registration

    var addToUserList=function(login,user_obj){
        //var userList= JSON.parse(fs.readFileSync(__dirname + '/json/users-list.json', 'utf8'));
        var text=fs.readFileSync(__dirname + '/json/users-list.txt');
        var userList=JSON.parse(text);
        if(!userList[login]){
            userList.push(user_obj);
            console.log(userList);
            return("ok");
        }
        else{
            console.log("invalid login");
            return("invalid login");
        }
        return;
    }

    var getLogin=function(user_obj){
        var login = Object.keys(user_obj)[0];
        addToUserList(login,user_obj);
        
    }
    function isJSON(data) {
   var ret = true;
   try {
      JSON.parse(data);
   }catch(e) {
      ret = false;
   }
   return ret;
}
    var checkStatus=function(login){
        var text=fs.readFileSync(__dirname + '/json/users-list',"utf-8");
        var obj=returnJSON(text);
        //obj['coolness']={'abc':"34.33"};
        obj.push({'abc':"34.33"});
            console.log(obj);
        //var userList=JSON.parse(text);
        /*var length=userList.userList.length;
        for(var i=0;i<length;i++){
            if(userList.userList[i]==login){
            //userList.push(user_obj);
                //sendMessage("zajete");
                console.log("jest wolne miejsce");
                return("ok");
            }   
        }*/
        return obj;
    }
  

function returnJSON(data) {
   var par=false;
   var ret =data;
   try {
      JSON.parse(data);
   }catch(e) {
      par = true;
   }
    if(ret==true){
        ret=JSON.parse(data);
    }
   return ret;
}
app.post('/register', function(req, res){
    // var params =  '{"name":"jan","id":"hg"}';
    var registerParams=returnJSON(req.body);
        //var status=addToUserList(req.body.login,req.body);
	//var obj2 = JSON.parse(fs.readFileSync(__dirname + '/json/name-id.json', 'utf8'));
    var json=checkStatus('jana');
    var json2=returnJSON(json);
   console.log(json2);
    //console.log(json2);
    //if(isJSON(req.body))
    //console.log(registerParams);
    //console.log(obj2);
    res.send(json);
});
/*dodaj w przyszłości

var data = "do shash'owania";
var crypto = require('crypto');
crypto.createHash('md5').update(data).digest("hex");
//funkcja skrótu


*/



//registration
//app.use(require('connect').bodyParser());
// application/x-www-form-urlencoded

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
	res.sendFile( __dirname + '/public/login.html');
	//res.sendFile( __dirname + '/public/js/main.js');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

