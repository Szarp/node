var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var userMod = require('./userModule.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // for parsing
app.use(cookieParser());



// set a cookie
app.use(function (req, res, next) {
  // check if client sent cookie
    var cookie = req.cookies.cookieName;
    if (cookie === undefined){
        // no: set a new cookie
        var randomNumber=Math.random().toString();
        randomNumber=randomNumber.substring(2,randomNumber.length);
        res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
        console.log('cookie created successfully');
    } 
    else{
    // yes, cookie was already present 
        console.log('cookie exists', cookie);
    } 
    next(); // <-- important!
});
app.post('/a', function(req, res){
    res.send('hi');
});
app.post('/register', function(req, res){
    var params =  '{"name":"jan","id":"hg"}';
    var loginData = req.body;
    console.log(loginData);
    var a = 'blad';
    if(userModule.addUser(loginData)){
        a='user added'+loginData.login;
         
    }
    res.send(a);
});
app.post('/login', function(req, res){
    // var params =  '{"name":"jan","id":"hg"}';
    var loginData=req.body;
    var a= 'false'
    loginData['cookie']=req.cookies.cookieName
      //console.log(req.cookies.cookieName);
    if(userModule.login(loginData)){
        a='ok';
        
    }
    //var a='blad';
     
         

    //console.log(a+'  '+loginData.login);
    res.send(a);
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
app.post('/logout', function(req, res){
    var cookie = req.cookies.cookieName;
    userModule.logout(cookie);
    console.log(cookie);
    res.send('ok');
    
});
app.get('/', function(req, res){
    var user = new userMod(); 
    var a =user.testModule();
    console.log(a);
    //userModule.test();
	res.sendFile( __dirname + '/public/login.html');

});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


/* ******************************************************************************/
/* ******************ctr + j - idź do deklaracji zmiennej*********************************/
/* *****************ctrl + t - idź do definicji ***********************/
/* ******************************************************************************/
var userModule=(function(){
        var sessionFile =__dirname+'/json/loginUsers.json';
        var userListFile =__dirname+'/json/users-list.json';
        test_findUserByCookie=function(){
            var cookie=34567890123890;
            var file={34567890123890:'jan',3456789079234899:'bartek'};
            var user=findUserByCookie(cookie,file);
            if(user!='jan'){throw 'cant find user-test'}
        }
        findUserByCookie=function(cookie,file){
            if(!file[cookie]){throw 'user undefined'};
           return file[cookie];
        }
        readFile = function(location){
            var file=fs.readFileSync(location,"utf-8");
            return JSON.parse(file);
        }
        writeFile=function(location,obj){
            var parsedObj=JSON.stringify(obj);
            fs.writeFileSync(location, parsedObj, 'utf-8');
            //o co chodzi z tą szybką edycją
            
        }
        accessibilityOfLoginPass=function(file,loginObj){
            for(var k in file) {
                if (file[k]==file[loginObj.login]) {
                    if(file[k].password==loginObj.password){
                        //console.log(file[k]);
                        //throw 'invalid username or login';
                        return true;
                    }
                }
                    
            }
            return false;
        }
        addKeyValue=function(obj,key,value){
           obj[key]=value;
           return obj;
        }
        test_accessibilityOfLoginPass=function(file,loginObj){
            var file={"Jaxcvb":{"email":"jannowak@gmail.com","password":"dNowakgjk","MD5":"sd","joinDate":"Thu Mar 17 2016 23:46:33 GMT+0100 (CET)"},"Faxcvsddb":{"email":"jannowak@gmail.com","password":"dNowakgjk","MD5":"sd","joinDate":"Thu Mar 17 2016 23:46:33 GMT+0100 (CET)"}};
            var loginObj={login:"Jaxcvb","email":"jannowak@gmail.com","password":"dNowakgjk","MD5":"sd","joinDate":"Thu Mar 17 2016 23:46:33 GMT+0100 (CET)"}
            var check=accessibilityOfLoginPass(file,loginObj);
            if(!check){throw 'cant corect check login';}
        }
        test_addKeyValue = function(){
            var obj = {};
            var key = 'a';
            var value = 123;
            var newObj=addKeyValue(obj,key,value);
            //console.log(newObj);
            if(newObj.a!=123){throw 'cant add key-value';}
            
        }
        //testy  
        addToLoginList=function(obj){    
            if(tryToLogin(obj)){
                var login = obj.login;
                //var password=obj.password;
                var cookie = obj.cookie;
                //var MD5pass='sd';//ta funkcja
                var file=readFile(sessionFile);
                writeFile(sessionFile,addKeyValue(file,cookie,login));
                return true;
            }
            return false;
        }
        tryToLogin=function(obj){    
            var file=readFile(userListFile);
            var check=accessibilityOfLoginPass(file,obj)
            return check;
        }
        //testy

        addDate=function(obj){
            obj['joinDate']=Date();   
            return obj;
        }
        
        //testy  
        addUserToFile=function(obj){    
            var login=obj.login;
            var email=obj.email;
            var password=obj.password;
            var MD5pass='sd';//ta funkcja
            var file=readFile(userListFile);
            addDate(obj);
            var date=obj.joinDate;
            if(chcekPropertyOfLogin(obj)){
                var newObj=addKeyValue(file,login,{email:email,password:password,MD5:MD5pass,joinDate:date});
                console.log(newObj);
                writeFile(userListFile,newObj);
                return true;
            }
        }
        //testy
        checkPropertyOfArray=function(string,length){
            var specialCharakters="~!@#$%^&*()_-+={}[]\|:;,.?";
            var bigLetters="ABCDEFGHIJKLMNOPRSTUWXYZV";
            var smallLetters="abcdefghijklmnoprstuwxyzv";
            var digits="0123456789";
            var marks=specialCharakters+bigLetters+smallLetters+digits;
            
            if(string.length<length){
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
        
        chcekPropertyOfLogin=function(obj){
            var login=obj.login;
            //var email=obj.email;
            var password=obj.password;
            var file=readFile(userListFile);
            try{
                retPropertyOfArray(login,5);
                //retPropertyOfArray(email,5);
                retPropertyOfArray(password,8);
                checkAccessibility(file,login);
                
            }
            catch(e){
                console.log('proba rejestracji  '+login+'  '+e);
                return false;
            }
         
        return true;
        }
        //testy

        tryInvalidLogin=function(){
             var login={
                login:'abcd"',
                email:'jan@gmail.com',
                password:'ASASD#da"'
             };
             if(checkPropertyOfArray(login)!=false){
                 throw 'invald login goes on';
             }
        }
        tryCorrectLogin=function(){
            var login={
                login:'abSas23cd',
                email:'jan@gmail.com',
                password:'ASASD#da289'
            } ;
            //var check=
            if(checkPropertyOfArray(login)!=false){
                throw 'correct login doesnt go on'
            }
        }
        deleteFormLoginList=function(file,cookie){
            delete file[cookie];
            return file;
        }
        logoutUser=function(cookie){
            var file = readFile(sessionFile);
            var newFile = deleteFormLoginList(file,cookie);
            writeFile(sessionFile,newFile);
            
        }
        testModule=function(){
            try{
                //tryInvalidLogin();
                //tryCorrectLogin();
                test_addKeyValue();
                test_findUserByCookie();
                test_accessibilityOfLoginPass();
                test_logout();
            } 
            catch(e){
                console.log('blad' + e);
                //return false;
            }
        }
    test_logout=function(){
        var cookie=123456;
        var file={"123456":'jan'};
        var check=deleteFormLoginList(file,cookie);
        console.log(check);
        for(var prop in check) {
            if(obj.hasOwnProperty(prop)){
                throw 'cant logout'
            }
                
        }
    }
    
    return{
        test:testModule,
        login:addToLoginList,
        addUser:addUserToFile,
        logout:logoutUser
        //tryLogins=tryLogins

    };
})();
