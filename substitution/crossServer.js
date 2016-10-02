var express = require('express'),
    fs= require('fs'),
    querystring = require('querystring'),
    http = require('http'),
    userMod = require(__dirname +'/myModules/getSubstitution.js'),
    jsonFromHtml = require(__dirname +'/myModules/getJsonFromHtml.js'),
    setDate = require(__dirname +'/myModules/setDate.js'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    request= require('request'),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    querystring = require('querystring');

var substitution =new jsonFromHtml();
var user= new userMod();
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // for parsing
app.use(cookieParser());
app.use(function (req, res, next) {
  // check if client sent cookie
    var cookie = req.cookies.cookieName;
    if (cookie === undefined){
        // no: set a new cookie
        var randomNumber=Math.random().toString();
        randomNumber=randomNumber.substring(2,randomNumber.length);
        res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
        //console.log('cookie created successfully');
    } 
    else{
    // yes, cookie was already present 
       // console.log('cookie exists', cookie);
    } 
    next(); // <-- important!
});

app.get('/hey', function (req, res) {
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
app.get('/', function (req, res) {
   // asf();
        res.sendFile( __dirname + '/public/substitutionPage.htm');
    
});
app.get('/test', function (req, res) {
    //var a=userMod.changes();
    //us.changes();
    asd();
    //console.log(a);
    res.send('ok');
});

app.post('/testXml', function(req, res){
    console.log(req.body);
    console.log(req.cookies.cookieName);
    getCookie(function(){
        console.log('added');
    });
    //console.log(res.headers);
    
    res.send('ok');
	//es.sendFile( __dirname + '/public/css/webPage.css');

});
app.get('/testSetCookie', function(req, resp){
    //console.log('hi');
    //var a=new setDate();
    //a.todayIs();
    //console.log(a.dispalyTime());
    //getDateFromGcall();
    // getCookie();
    //a.getGPIDandGSH()
    //console.log(a.z);
    //console.log(a.params);
    asd();
    resp.send('ok');
	//es.sendFile( __dirname + '/public/css/webPage.css');

});
//hi 7594161 6a5e61df [ 'PHPSESSID=856sgp5ehj7to5f6khsme58pc4; path=/' ]

  

app.listen(8090);
// some places where save
//place /zso11
//colections users
//login, password, data
// substitutions

function getSomeSubstitution(date,callback){
    getData(date,function(data){
        convertToSubstitutions(data,function(convertedData){
            saveSubstitutions(date,convertedData,function(){
                console.log('save substitution '+ date);
                setImmediate(function() {
                    callback();
                });
                
            })
            
        })
    })
              //console.log(x);

}


function saveSubstitutions(date,data,callback){
    var dataToSave={};
        dataToSave['substitution']=data;
        console.log(dataToSave);
        modifyById(date,'substitutions',dataToSave,function(){
            setImmediate(function() {
                callback();
            });
            //console.log('saved substitutions '+date);
            
            //ok;
        })
    
}
function convertToSubstitutions(data,callback){
    //console.log('hi');
    var response;
    substitution.fileString=data;
    var err=substitution.testIfCorrectFile();
    //console.log(err);
    if(err){
        substitution.getJsonObj();
        user.keyArray=JSON.parse(substitution.keyObj);
        user.dataArray=JSON.parse(substitution.dataObj);
        console.log(substitution.dataObj);
        response=user.changes();
        //fs.writeFileSync(__dirname+'/json/dataEx.txt', JSON.stringify(user.dataArray), 'utf-8');
    }
    else{
        response='no substitutions';
    }
    setImmediate(function() {
        callback(response);
    });
    
    
    
}
function getData(date,callback){
    downloadData(date,function(err,body){
        if(err){
            getCookie(function(){
                downloadData(date,function(err,newBody){
                    setImmediate(function() {
                        callback(newBody);
                    });
                })
            });
        }
        else{
            setImmediate(function() {
                callback(body);
            });
        }   
    });
}
function downloadData(date,callback){
    var url1='http://zso11.edupage.org/gcall';
    findById('params','testCollection',function(params){    
     //var gDate=['7593327', '1dc1b4b7'];
    var cookie=params['cookie'];
    var form = {
        gpid:params['gpid'],
        gsh:params['gsh'],
        action:"switch",
        date:date,
        _LJSL:"2,1"
    };
    var formData = querystring.stringify(form);
    var contentLength = formData.length;

    request({
        headers: {
          'Content-Length': contentLength,
          'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie' : cookie
        },
        uri: url1,
        body: formData,
        method: 'POST'
      }, function (err, res, body) {
        assert.equal(null,err);
                setImmediate(function() {
                callback(body.length<100,body);
            });
            //console.log(body);
        
      });

    });

        
    
}
    

    function getCookie(callback){
        //this.ex('ab');
        var url='http://zso11.edupage.org/substitution/?';
        request(url,function(err,res,body){
            if(!err && res.statusCode ==200){
                getGPIDandGSH(body,function(params){
                    var cookie=res.headers['set-cookie'];
                    var data = {
                        'gpid':params[0],
                        'gsh':params[1],
                        'cookie':cookie
                    }
                    console.log(JSON.stringify(data));
                    modifyById('params','testCollection',data,function(){
                        console.log('data added: '+data);
                        
                    })
                setImmediate(function() {
                callback(data);
            });
                    
                });
                //ex(this.body);
                //  console.log('hi',params[0],params[1],cookie);
                //save somewhere
            }

        });

    }
    function saveToCollection(params,callback){
        //[collection,{data}]
        var collectionName = params[0];
        var data = params[1];
        var url = 'mongodb://localhost:27017/test2';
        MongoClient.connect(url, function(err, db) {
            assert.equal(null,err);
            var collection=db.collection(collectionName);
            collection.insert(data, {w: 1}, function(err1, records){
                assert.equal(null,err1);
                //console.log("Record added as "+records[0]._id);
            });
            setImmediate(function() {
                callback();
            });
        db.close();
        })
    }  
    function modifyById(id,collectionName,paramsToModify,callback){
        //[collection,{data}]
        //var collectionName = collection;
        var data = paramsToModify;
        var url = 'mongodb://localhost:27017/test2';
        MongoClient.connect(url, function(err, db) {
            assert.equal(null,err);
            var collection=db.collection(collectionName);
            collection.findAndModify(
              {_id: id}, // query
                [['_id','asc']],  // sort order
              {$set: paramsToModify}, // replacement, replaces only the field "hi"
              [{upsert:true}], // options
              function(err, object) {
                  if (err){
                      //console.warn(err.message);  // returns error if no matching object found
                  }else{
                      console.dir(object);
                  }
              });
        
            setImmediate(function() {
                callback();
            });
        db.close();
        })
    }    
    function findById(id,collectionName,callback){
        //[collection,{data}]
        //var collectionName = collection;
        //var data = paramsToModify;
        var url = 'mongodb://localhost:27017/test2';
        MongoClient.connect(url, function(err, db) {
            assert.equal(null,err);
            var collection=db.collection(collectionName);
            collection.findOne({_id:id},function(err, doc) {
            assert.equal(null, err);
            //assert.equal(null, doc);
            //assert.equal(2, doc.b);
                setImmediate(function() {
                callback(doc);
            });   
        db.close();
      });
        
        //db.close();
        })
    }
    var getGPIDandGSH=function(data,callback){
        //console.log('mi');
        var gshString='gsh';
        var a=data.indexOf('gsh');
        var gpid=data.slice(a-8,a-1);
        var gsh=data.slice(a+4,a+12);
        setImmediate(function() {
            callback([gpid,gsh]);
        });
    }

function asf(){

    var z=new setDate();
    //z.todayIs()
    //z.tommorowIS();
    z.yeasterdayIS();
    console.log(z.dispalyTime());
}


        
        
        
    
    function getParams(callback){
        //this.ex('ab');
        var url='http://zso11.edupage.org/substitution/?';
        request(url,function(err,res,body){
            if(!err && res.statusCode ==200){
                getGPIDandGSH(body,function(params){
                    var cookie=res.headers['set-cookie'];
                    var data = {
                        'gpid':params[0],
                        'gsh':params[1],
                        'cookie':cookie
                    }
                    console.log(JSON.stringify(data));
                    saveToCollection(['testCollection',data],function(){
                        console.log('data added: '+data);
                        
                    })
                    
                });
                //ex(this.body);
                //  console.log('hi',params[0],params[1],cookie);
                //save somewhere
            }
        });
        setImmediate(function() {
                callback();
            });
    }
//exports.name=func();
    function saveToCollection(params,callback){
        //[collection,{data}]
        var collectionName = params[0];
        var data = params[1];
        var url = 'mongodb://localhost:27017/test2';
        MongoClient.connect(url, function(err, db) {
            assert.equal(null,err);
            var collection=db.collection(collectionName);
            collection.insert(data, {w: 1}, function(err1, records){
                assert.equal(null,err1);
                //console.log("Record added as "+records[0]._id);
            });
            setImmediate(function() {
                callback();
            });
        db.close();
        })
    }
    var getGPIDandGSH=function(data,callback){
        //console.log('mi');
        var gshString='gsh';
        var a=data.indexOf('gsh');
        var gpid=data.slice(a-8,a-1);
        var gsh=data.slice(a+4,a+12);
        setImmediate(function() {
            callback([gpid,gsh]);
        });
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
    z.fileString=fs.readFileSync(__dirname+'/json/dataEx.txt', 'utf-8');
    //z.cutFromDataSource();
    //console.log(z.fileString);
    //var a=z.iterateArray(['[',']']);
    //console.log(z.fileString.slice(a[0],a[1]+1));
    z.getJsonObj();
    
    //console.log(z.keyObj);
    //console.log(z.dataObj);
    var x = new userMod();
    x.keyArray=JSON.parse(z.keyObj);
    x.dataArray=JSON.parse(z.dataObj);
    //console.log(x.keyArray);
    //x.createKeyList();
    //console.log(x.keyList);
    x.returnChanges();
    console.log(x.changes());
  //z.findBraces();
    
    
}








