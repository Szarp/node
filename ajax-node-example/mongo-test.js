var MongoClient = require('mongodb').MongoClient;
//var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var test = require('assert');
var fs = require('fs');

var url = 'mongodb://localhost:27017/test';

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
    for (k in s){
        var a = s[k];
        console.log('aa');
        for (var i = 0; i<129; i++){
            console.log(a[i], 'heys');
        }
    }
    
    
}
function readData(){
    // this. data columnsName = {time:[], accX:[], accY:[] accZ:[]};
    this.readJsonFile = function(){
            var file=fs.readFileSync(this.location,"utf-8");
        //test.unequal(file)
            this.data = JSON.parse(file);
        //test.equal(null,)
    }
    //dataFile = function(){}
    this.parseData = function(){
        this.newColumns = this.columns;
        var dataL = Object.keys(this.data).length / Object.keys(this.columns).length;
        //console.log('dataL: ',dataL );
        var columnsL = Object.keys(this.columns).length;
        
        for (var i = 0; i < dataL; i++){
            var para = 0;
            for (key in this.columns){
                //nie di
                this.columns[key].push(this.data[i*columnsL+para]);
                para++;
                //console.log(time);
            }
        }   
        //return  newColumns;
    }
 
    
}
    function prepreDataToSave(dirname, objClass){
        //console.log('hh');
        ///*
        //var read = new accData();
        //  __dirname+'/json/input.json';
        objClass.location = dirname;
        //var file = fs.readFileSync(linkData,"utf-8");
        objClass.readJsonFile();
        //read.columns = {'time':[], 'accX':[], 'accY':[], 'accZ':[]};
        objClass.parseData();
        
        return objClass.retData();
        //display(newData);
        //*/
    }
//class 
function accData(){
    readData.call(this);
    this.time = 'not yet';
    this.columns = {'time':[], 'accX':[], 'accY':[], 'accZ':[]};
    this.version = '0.0.1';
    this.description = 'not yet';
    this.type = 'accData';
    this.array = {
        'data':{
            'type':this.type,
            'version':this.version,
            'description':this.description,
            'time':this.time,
            'data':{
                'accX':this.columns['accX'],
                'accY':this.columns['accY'],
                'accZ':this.columns['accZ'],
                'time':this.columns['time']
            }
        }
    }
    this.retData = function(){
        return this.array;
    }

};

//fs.readFileSync()

var insertDocument = function(dbCollection, dataToSave) {
    //var collection = this.collection; 
    console.log(dataToSave);
    ///*
    dbCollection.insertMany([dataToSave], {w:1}, function(err, result) {
    test.equal(null, err);
    console.log(result);
  });
  //*/
};

MongoClient.connect(url, function(err, db) {
//console.log('hey');
  // Create a collection we want to drop later
    var dirName = __dirname+'/json/input.json';
    var data = prepreDataToSave(dirName, new accData());
  var collection = db.collection('data');
    //var a = new insertDocument(db);
    //a.collection = 'data'; 
    
    //insertDocument(collection, data);
    
  /*
    // Insert a bunch of documents for the testing
  collection.insertMany([{a:1}, {a:2}, {a:3}], {w:1}, function(err, result) {
    test.equal(null, err);
  });
  */
    // Peform a simple find and return all the documents
    
    
    collection.find({},{_id:0,"data.data":1}).toArray(function(err, docs) {
      test.equal(null, err);
      //test.equal(3, docs.length);
        console.log(docs, " hey");
        //change();
       // readData_test();
      
    });
    /*
    var cursor = collection.find({'data.type':'accData'});
      // Fetch the first object off the cursor
      cursor.each(function(err, item) {
         // console.log(item, ' nice');
        // If the item is null then the cursor is exhausted/empty and closed
        

          // Show that the cursor is closed
          cursor.toArray(function(err, items) {
            //test.ok(err != null);
              
            // Let's close the db
           
        });
          });
          */
      db.close();
 
});
/*

db.listCollections().toArray(function(err, items) {
    console.log(items);
  test.equal(null, err);
  //db.close();
});

*/