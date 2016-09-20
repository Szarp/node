var express = require('express');
var fs= require('fs');
var querystring = require('querystring');
var http = require('http');
var userMod = require('./getSubstitution.js');

var substitution =new userMod();

var app = express();
app.get('/', function (req, res) {
  var data = querystring.stringify({
    username: "myname",
    password: " pass"
  });

  var options = {
    host: 'zso11.edupage.org',
    path: '/substitution/?',
    method: 'GET',
  };

  var httpreq = http.request(options, function (response) {
      var x="";
      //var y=1;
    response.setEncoding('utf8');
      console.log(response);
    response.on('data', function (chunk) {
        //var z=isThereString(chunk,"{teachers:{");
        //if(z==true){y=1;}
            x+=chunk;
      //console.log("body: " + x.length);
        //fs.writeFileSync(__dirname+'/json/pageZSO.txt', chunk, 'utf-8');
    });
    response.on('end', function() {
        var y=x.indexOf('"teachers":{');
        //console.log('index of is: '+y)
        //x=x.slice(y-2,x.length);
       // fs.writeFileSync(__dirname+'/json/pageZSO.txt', x, 'utf-8');
      res.send('ok');
    })
  });
  httpreq.write(data);
  httpreq.end();
});
app.get('/test2', function (req, res) {
    asf();
        res.send('ok');
    
});
app.get('/test', function (req, res) {
    //var a=userMod.changes();
    //us.changes();
    asd();
    //console.log(a);
    res.send('ok');
});


app.listen(8090);
function asf(){
    /*
    var z=new Date()
    z.setDate(8);
    var x=new getJsonFromHtml(); 
    x.fileString=fs.readFileSync(__dirname+'/json/pageZSO.txt', 'utf-8');
    var a=x.indexOfStringInFile('gsh');
    var b=x.fileString.slice(a-8,a-1);
    var c=x.fileString.slice(a+4,a+12);
    var year = z.getFullYear();
    var month = z.getMonth();
    var day = z.getDate();
    if(month<10){month='0'+month;};
    if(day<10){day='0'+day;};
    //console.log(b);
    //console.log(c);
    if(z.getMonth)
    var d=year+'-'+month+'-'+day;
    console.log(d);
    */
    var z=new setDate();
    //z.todayIs()
    //z.tommorowIS();
    z.yeasterdayIS();
    console.log(z.dispalyTime());
}
function getGPIDandGSH(file){
    var gshString='gsh';
    var a=file.indexOf('gsh');
    var gpid=file.slice(a-8,a-1);
    var gsh=file.slice(a+4,a+12);
    return [gpid,gsh];
}
function setDate(){
    //this.Today = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    //this.day
    //this.month
    //this.year
    this.dispalyTime=function(){
        return this.year+'-'+this.month+'-'+this.day;
    }
    this.updateTime=function(){
        this.year = this.Today.getFullYear();
        this.month = this.Today.getMonth();
        this.day = this.Today.getDate();
        if(this.month<10){this.month='0'+this.month;};
        if(this.day<10){this.day='0'+this.day;};
    }
    this.todayIs=function(){
        this.Today = new Date();
        this.updateTime();

    }
    this.tommorowIS=function(){
        this.Today = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        this.updateTime();
    }
    this.yeasterdayIS=function(){
        this.Today = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
        this.updateTime();
    }
    this.setDate=function(year,month,day){
        this.Today=new Date();
        this.Today.setFullYear(year);
        this.Today.setDate(day);
        this.Today.setMonth(month);
        this.updateTime();
        
    }
    
}
function asd(){
    /*
    var x=new getSubstitution(); 
    x.keyArray=keyArray;
    x.dataArray=dataArray;
    x.returnChanges();
    console.log(x.allChanges);
   */
    var z=new getJsonFromHtml();
    z.fileString=fs.readFileSync(__dirname+'/json/pageZSO.txt', 'utf-8');
    //z.cutFromDataSource();
    //console.log(z.fileString);
    //var a=z.iterateArray(['[',']']);
    //console.log(z.fileString.slice(a[0],a[1]+1));
    z.getJsonObj();
    
    console.log(z.keyObj);
    console.log(z.dataObj);
  //z.findBraces();
    
    
}


function getJsonFromHtml(){
    //this.fileString
    //this.slicedString
    //this.keyObj
    findBraces.call(this);
    this.teacherString='"teachers":{';
    this.dataString='DataSource([';
    //this.teacherString='teacher';
    this.getJsonObj=function(){
        this.cutFromTeacher();
            var keyIndex=this.iterateArray(['{','}']);
            this.keyObj=this.fileString.slice(keyIndex[0],keyIndex[1]+1);
        this.cutFromDataSource();
            var dataIndex=this.iterateArray(['[',']']);
            this.dataObj=this.fileString.slice(dataIndex[0],dataIndex[1]+1);
        
        
        
    }
    this.iterateArray =function(pattern){
        var x=0;
        for (var i=0; i < this.fileString.length; i++) {
            var char =this.fileString.charAt(i);
            //console.log('char: '+char);
            if(char ==pattern[0] && x==0){
                this.startBracing(i);
                x=1;
            }
                
                this.findBracketObject(char,i,pattern);
                console.log('brace: '+this.braceCounter);
            
            if(this.isObjFound == true){
                return[this.beginOfArray,this.endOfArray];
            }
        }
            //console.log(texto.charAt(i)); 
        
    }
    this.indexOfStringInFile=function(string){
        var index=this.fileString.indexOf(string);
        if(index == -1){
            console.log('problem with finding teacherString: ');
            console.log(Date());
            console.log(string);
            return;
        }
        return index;
        
    }
    this.cutFromTeacher=function(){
        var beginpoint=this.indexOfStringInFile(this.teacherString);
        this.fileString=this.fileString.slice(beginpoint-2,this.fileString.length);
    }    
    this.cutFromDataSource=function(){
        var beginpoint=this.indexOfStringInFile(this.dataString);
        this.fileString=this.fileString.slice(beginpoint+this.dataString.length-1,this.fileString.length);
    }
    this.findKeyObject=function(){
        
        
    }
    this.findBraces=function(){//klamry
        this.startBracing();
        var a=this.iterateArray();
        console.log(a);
        
    }
}
function findBraces(){
    //this.counter=0;
    this.findBracketObject=function(char,indexOfChar,pattern){
        //if(char !='{' && char != '{'){
          //  throw('bad char in module findBraces');
        //}
        if(char == pattern[0]){
            this.beginBrace();
        }
        if(char == pattern[1]){
            this.endBrace();
        }
        this.stopFindingBraces(indexOfChar);
    }
    this.startBracing=function(indexOfBrace){
        this.braceCounter=0;
        this.endOfArray=0;
        this.isObjFound=false;
        this.beginOfArray=indexOfBrace;
    }
    this.beginBrace=function(){
       this.braceCounter+=1;
        
    }
    this.endBrace=function(){
        this.braceCounter-=1;  
    }
    this.stopFindingBraces=function(indexOfBrace){
        if(this.braceCounter==0){
            this.endOfArray=indexOfBrace;
            this.isObjFound=true;
        }
    }
}







