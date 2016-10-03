var express = require('express'),
    fs= require('fs'),
    //querystring = require('querystring'),
    http = require('http'),
    //userMod = require(__dirname +'/myModules/getSubstitution.js'),
   // jsonFromHtml = require(__dirname +'/myModules/getJsonFromHtml.js'),
    setDate = require(__dirname +'/myModules/setDate.js'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    //request= require('request'),
    //MongoClient = require('mongodb').MongoClient,
    //assert = require('assert'),
    myFunc = require(__dirname +'/myModules/serverReqests');
   // querystring = require('querystring');

//var substitution =new jsonFromHtml();
//var user= new userMod();
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
   // asd();
    //console.log(a);
    res.send('ok');
});

app.post('/testXml', function(req, res){
    console.log(req.body);
    console.log(req.cookies.cookieName);

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
    //asd();
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
myFunc.subs('2016-10-03',function(y){
    //console.log(y);
   // y[]
    var a=JSON.stringify(y);
    console.log(y[0]);

})
//myFunc.getCookie(function(){});//mongoTest();

function mongoTest(){
        MongoClient.connect('mongodb://localhost:27017/test2', function(err, db) {

    var collection = db.collection('substitutions');

        db.collections(function(err, collections){
         // console.log(collections);
      }); 
        collection.find({_id:'2016-10-04'}).forEach(function(f){console.log(f)});
            //collection.update({_id:'2016-10-04'}, {$set:{substitution:'hey'}},{upsert:true});
        collection.find({},{}).forEach(function(f){
            //console.log(f)
        });
          db.close();
    });

}


        
        
        
    


   










