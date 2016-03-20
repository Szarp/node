


var userModule=(function(){
        var sesionFile=__dirname+'/json/loginUsers.json';
        var userListFile=__dirname+'/json/users-list.json';
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
        }
        readFile=function(location){
            var file=fs.readFileSync(location,"utf-8");
            return JSON.parse(file);
        }
        writeFile=function(location,obj){
            var parsedObj=JSON.stringify(obj);
            fs.writeFileSync(location, parsedObj, 'utf-8');
            
        }
        accessibilityOfLoginPass=function(file,loginObj){
            for(var k in file) {
                if (file[k]==file[loginObj.login]) {
                    if(file[k].password==loginObj.password){
                        //console.log(obj[k]);
                        //throw 'invalid username or login';
                        return true;
                    }
                }
                    
            }
            return false;
        }
        test_accessibilityOfLoginPass=function(file,loginObj){
            var file={"Jaxcvb":{"email":"jannowak@gmail.com","password":"dNowakgjk","MD5":"sd","joinDate":"Thu Mar 17 2016 23:46:33 GMT+0100 (CET)"},"Faxcvsddb":{"email":"jannowak@gmail.com","password":"dNowakgjk","MD5":"sd","joinDate":"Thu Mar 17 2016 23:46:33 GMT+0100 (CET)"}};
            var loginObj={"Jaxcvb":{"email":"jannowak@gmail.com","password":"dNowakgjk","MD5":"sd","joinDate":"Thu Mar 17 2016 23:46:33 GMT+0100 (CET)"}}
            var check=accessibilityOfLoginPass(file,loginObj);
            if(!check){throw 'cant corect check login';}
        }
        addKeyValue=function(obj,key,value){
           obj[key]=value;
           return obj;
        }
        test_addKeyValue(){
            var obj = {};
            var key = 'a';
            var value = 123;
            var newObj=addKeyValue(obj,key,value);
            if(newObj!={'a':123}){throw 'cant add key-value';}
            
        }
        //testy  
        addToLoginList=function(obj){    
            if(tryToLogin(obj)){
                var login = obj.login;
                var password=obj.password;
                var cookie = obj.cookie;
                //var MD5pass='sd';//ta funkcja
                var file=readFile(sessionFile);
                writeFile(sesionFile,addKeyValue(file,cookie,login));
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
            var newObj=addKeyValue(file,login,{email:email,password:password,MD5:MD5pass,joinDate:date});
            console.log(newObj);
            writeFile(userListFile,newObj);
        return true;
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
            var email=obj.email;
            var password=obj.password;
            var file=readFile(userListFile);
            try{
                retPropertyOfArray(login,5);
                retPropertyOfArray(email,5);
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
        testModule=function(){
            try{
                tryInvalidLogin();
                tryCorrectLogin();
                test_addKeyValue();
                test_findUserByCookie();
                test_accessibilityOfLoginPass();
            } 
            catch(e){
                console.log('blad' + e);
                //return false;
            }
        }
    return{
        test:testModule,
        login:addToLoginList,
        test:test_Login,
        addUser:addUserToFile
        //tryLogins=tryLogins

    };
})();
