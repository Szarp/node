var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser =require('body-parser')
var multer = require('multer');
var cookieParser = require('cookie-parser')
app.use(bodyParser.json());
//app.use(multer);
app.use(bodyParser.urlencoded({ extended: false })); // for parsing
app.use(cookieParser());
//registration


/*
// set a cookie
app.use(function (req, res, next) {
  // check if client sent cookie
  var cookie = req.cookies.cookieName;
  if (cookie === undefined)
  {
    // no: set a new cookie
    var randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
    res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
    console.log('cookie created successfully');
  } 
  else
  {
    // yes, cookie was already present 
    console.log('cookie exists', cookie);
  } 
  next(); // <-- important!
});

// let static middleware do its job
app.use(express.static(__dirname + '/public'));
*/
app.post('/register', function(req, res){
    // var params =  '{"name":"jan","id":"hg"}';
    var loginData=req.body;
      console.log(loginData);
    var a='blad';
     if(newUserCheck.testUserLogin(loginData)){
          if(addNewUser.addUser(loginData)){
             a='dodano do listy';
          }
         
     }

    console.log(a+'  '+loginData.login);
    res.send(a);
});
app.post('/a', function(req, res){
    // var params =  '{"name":"jan","id":"hg"}';
    res.cookie('cookiename', 'cookievalue', { maxAge: 900000, httpOnly: true });

    //res.send(a);
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
    
	res.sendFile( __dirname + '/public/login.html');

});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
var addNewUser=(function(){
        readFile=function(){
            var file=fs.readFileSync(__dirname + '/json/users-list.json',"utf-8");
            return JSON.parse(file);
        }
        addKeyValue=function(obj,key,value){
           obj[key]=value;
           return obj;
        }
        addDate=function(obj){
            obj['joinDate']=Date();   
            return obj;
        }
        writeFile=function(obj){
            var parsedObj=JSON.stringify(obj);
            fs.writeFileSync(__dirname + '/json/users-list.json', parsedObj, 'utf-8');
            
        }
        
        
        //testy  
        test_readFile=function(parsedFile){
            if(!parsedFile){throw 'cant read file'}
        }
        test_writeFile=function(obj,lastFile){
            var file=fs.readFileSync(__dirname + '/json/users-list.json',"utf-8");
            var newFile=JSON.stringify(obj);
            var saveFile=JSON.stringify(lastFile);
            console.log(file,newFile);
            //console.log(newFile);
            if(file!=newFile){
                fs.writeFileSync(__dirname + '/json/users-list.json', saveFileFile, 'utf-8');
                throw 'problem with saving file'
            }
        }
        addUserToFile=function(obj){    
            var login=obj.login;
            var email=obj.email;
            var password=obj.password;
            var MD5pass='sd';//ta funkcja
            var file=readFile();
            addDate(obj);
            var newObj=addKeyValue(file,login,{email:email,password:password,MD5:MD5pass});
            console.log(newObj);
            writeFile(newObj);
            try{
                test_readFile(file);
                test_writeFile(newObj,file);
            }
            catch(e){
                console.log('blad: '+e);
                return false;
            }
         
        return true;
        }
        //testy

    return{
        addUser:addUserToFile

    };
})();
var newUserCheck=(function(){
        checkPropertyOfArray=function(string){
            var specialCharakters="~!@#$%^&*()_-+={}[]\|:;,.?";
            var bigLetters="ABCDEFGHIJKLMNOPRSTUWXYZV";
            var smallLetters="abcdefghijklmnoprstuwxyzv";
            var digits="0123456789";
            var marks=specialCharakters+bigLetters+smallLetters+digits;
            
            if(string.length<8){
                return 'to short';
            }
            for(var i=0;i<string.length;i++){
                if(marks.indexOf(string[i])==-1){
                    return 'invalid mark';
                }
            }
            return;
        }
        retPropertyOfArray=function(string){
	  	    var retFrom=checkPropertyOfArray(string);
            if(retFrom){ throw retFrom}
        }
        checkAccessibility=function(obj,key){
            for(var k in obj) {
                if (obj[k]==obj[key]) {
                    //console.log(obj[k]);
                    throw 'invalid username';
                    break;
                }
            }
        }
        retUserFile=function(){
            var file=fs.readFileSync(__dirname + '/json/users-list.json',"utf-8");
            return JSON.parse(file);
        }
        
        testFile=function(parsedFile){
            if(!parsedFile){throw 'cant read file'}
            
        }
        chcekPropertyOfLogin=function(obj){
            var login=obj.login;
            var email=obj.email;
            var password=obj.password;
            var file=retUserFile();
            try{
                retPropertyOfArray(login);
                retPropertyOfArray(email);
                retPropertyOfArray(password);
                testFile(file);
                checkAccessibility(file,login);
                
            }
            catch(e){
                console.log('proba rejestracji  '+login+'  '+e);
                return false;
            }
         
        return true;
        }
        //testy
        tryLogins=function(){
            try{
                tryInvalidLogin();
                tryCorrectLogin();
                
            }
            catch(e){ console.log(e);}
        }
        tryInvalidLogin=function(){
             var login={
                login:'abcd',
                email:'jan@gmail.com',
                password:'ASASD#da"'
             };
             if(checkPropertyOfLogin(login)!=false){
                 throw 'invald login goes on';
             }
        }
        tryCorrectLogin=function(){
            var login={
                login:'abSas23cd',
                email:'jan@gmail.com',
                password:'ASASD#da289'
            } ;
            if(checkPropertyOfLogin(login)!=false){
                throw 'correct login doesnt go on'
            }
        }
    return{
        testUserLogin:chcekPropertyOfLogin
        //tryLogins=tryLogins

    };
})();

