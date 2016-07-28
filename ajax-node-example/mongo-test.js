var MongoClient = require('mongodb').MongoClient;
//var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var test = require('assert');
var fs = require('fs');

var url = 'mongodb://localhost:27017/test';
var linkData =__dirname+'/json/input.json';
var file=fs.readFileSync(linkData,"utf-8");
var data= JSON.parse(file);
function change(){
    //console.log(data);
    //var newData=data;
    //console.log(newData);
    var dataX = [];
    var dataY = [];
    var dataZ = [];
    var time = [] ;
    var para = 0;
    var x=data.length/4;
    for (var i=0; i<x;i++){
        time.push(data[i*4]);
        dataX.push(data[i*4+1])
        dataY.push(data[i*4+2])
        dataZ.push(data[i*4+3])
        //console.log(time);
        
    } 
    display(time);    
}
function display(s){
    for (var i=0; i<s.length;i++){
        console.log(s[i]);
         
    }
    
    
}
var exampleData = {
    'data':{
        'type':'acc',
        'version':'0.0.1',
        'description':'data from ',
        'time':'new data',
        data:{
            accX:[],
            accY:[],
            accZ:[],
            time:[]
        }
}
//fs.readFileSync()

var insertDocument = function(db, callback) {
   db.collection('restaurants').insertOne( {
      "address" : {
         "street" : "2 Avenue",
         "zipcode" : "10075",
         "building" : "1480",
         "coord" : [ -73.9557413, 40.7720266 ]
      },
      "borough" : "Manhattan",
      "cuisine" : "Italian",
      "grades" : [
         {
            "date" : new Date("2014-10-01T00:00:00Z"),
            "grade" : "A",
            "score" : 11
         },
         {
            "date" : new Date("2014-01-16T00:00:00Z"),
            "grade" : "B",
            "score" : 17
         }
      ],
      "name" : "Vella",
      "restaurant_id" : "41704620"
   }, function(err, result) {
    //assert.equal(err, null);
    console.log("Inserted a document into the restaurants collection.");
    callback();
  });
};


// Connection url
 ///*
MongoClient.connect(url, function(err, db) {
  //console.log('jesr');
    test.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});//*/
//var MongoClient = require('mongodb').MongoClient,
 
// Connection url
//var url = 'mongodb://localhost:27017/test';
// Connect using MongoClient

MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
console.log('hey');
  // Create a collection we want to drop later
  var collection = db.collection('simple_query');

  /*
    // Insert a bunch of documents for the testing
  collection.insertMany([{a:1}, {a:2}, {a:3}], {w:1}, function(err, result) {
    test.equal(null, err);
  });*/
    // Peform a simple find and return all the documents
    collection.find({'a':1}).toArray(function(err, docs) {
      test.equal(null, err);
      //test.equal(3, docs.length);
        console.log(docs, " hey");
        change();
      
    });
    var cursor = collection.find({});
      // Fetch the first object off the cursor
      cursor.each(function(err, item) {
          console.log(item, ' nice');
        // If the item is null then the cursor is exhausted/empty and closed
        if(item == null) {

          // Show that the cursor is closed
          cursor.toArray(function(err, items) {
            //test.ok(err != null);
              
            // Let's close the db
           
          });
        };
          });
      db.close();
 
});