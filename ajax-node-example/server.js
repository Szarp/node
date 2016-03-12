var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser =require('body-parser')
var multer = require('multer');
app.use(bodyParser.json());
//app.use(multer);
app.use(bodyParser.urlencoded({ extended: false })); // for parsing
//registration




    var checkStatus=function(login){
        var text=fs.readFileSync(__dirname + '/json/users-list.json',"utf-8");
        console.log(text);
        var a=JSON.parse(text);
        a['coola']={'abc':"34.33"};
        delete a['cool'];
        var x=JSON.stringify(a);
        console.log(a);
        fs.writeFileSync(__dirname + '/json/users-list.json', x, 'utf-8');
        return a;
    }
    var addKeyValue=function(obj,key,value){
           obj[key]=value;
           return obj;
        
    }
    var addDate=function(obj){
     obj['joinDate']=Date();   
     return obj;
    }
    var checkAccessibility=function(obj,key){
        for(var k in obj) {
            if (obj[k]==obj[key]) {
                //console.log(obj[k]);
                return 'invalid username';
                
            }
    
        }
        return 'ok';
    } 
app.post('/register', function(req, res){
    // var params =  '{"name":"jan","id":"hg"}';
    var loginData=req.body;
        var user = {
       login: req.body.login,
       email: req.body.email,
       password: req.body.password,
       //Num: req.body.num
   };
    console.log(user);
    addDate(user);
    console.log(user);
        //var status=addToUserList(req.body.login,req.body);
	//var obj2 = JSON.parse(fs.readFileSync(__dirname + '/json/name-id.json', 'utf8'));
   // var json=checkStatus('jana');
    //var json2=returnJSON(json);
   //console.log(json2);
    //console.log(json2);
    //if(isJSON(req.body))
    //console.log(registerParams);
    //console.log(obj2);
    res.send('ok');
});
/*dodaj w przyszłości

var data = "do shash'owania";
var crypto = require('crypto');
crypto.createHash('md5').update(data).digest("hex");
//funkcja skrótu


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

