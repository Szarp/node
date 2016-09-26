var exampleData=['asdf','sdfg','xcvbn','werty'];

function getForm(){
    var a = document.getElementById('specieSelect').value;
    var b = document.getElementById('fillPropertySpecie').value;
    //b.value='no';
    //document.getElementById('fillPropertySpecie').value='no';
    console.log(a,b);
}
var events = ['homePage','substitutionList','settingsMenu'];
var mainEvents ={
    'home':['navbar_home','homePage'],
    'substitution':['navbar_substitution','substitutionList'],
    'settings':['navbar_settings','settingsMenu']
}

function goTo(id){
    var el;
    for(var i=0; i<events.length;i++){
        el = document.getElementById(events[i]);
        if(events[i]==id){
            el.style.display='block';
        }
        else{
            el.style.display='none';
        }
    }
    
}
function changeDisplayOnClick(key){
    console.log(key[0]);
    
    var el = document.getElementById(key[0]);
    console.log(el);
    el.addEventListener('click',function(){goTo(key[1])},false);
}

function testFunc() {
    var x= new appendSubstitutions();
   // console.log('hi');
    //console.log('whats up');
    x.data=exampleData;
    x.refreshUl();
}
function appendSubstitutions(){
    //this.data
    this.liList=[];
    this.listId='displaySubstitutions';
    this.listToEdit=document.getElementById(this.listId);
    var text;
    this.refreshUl=function(){
        if(this.liList==undefined){
            console.log('problem with append');
        }
        this.clearEditList();
        this.crateLiElements();
        this.appendLiElements();
    }
    this.crateLiElements=function(){
        for(var i=0;i<this.data.length;i++){
            text=this.data[i];
            this.liList[i]=document.createElement("li");
            this.liList[i].appendChild(document.createTextNode(text));
        }
    }
    this.appendLiElements=function(){
        for(var i=0;i<this.data.length;i++){
            this.listToEdit.appendChild(this.liList[i])
        }
        
    }
    this.clearEditList=function(){
        //console.log('hi');
        this.listToEdit.innerHTML='';// = '';
        console.log(this.listToEdit.innerHTML);// = '';
        
    }
}
function testNumberFive(){
    for (k in mainEvents){
        //console.log(mainEvents[k]);
        changeDisplayOnClick(mainEvents[k]);
    }
    console.log('hi');
}
function testNumberFour(){
    sendObj('/testXml',obj,hey);
}
function hey(xx){
    console.log(xx);
}
var obj={'hey':'my name is skrilex','hey2':89};
    var sendObj = function(url,json_obj,callback){
    var http = new XMLHttpRequest();
    //var url = "get_data";
    var string_obj=JSON.stringify(json_obj);
        console.log(string_obj);
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/json");
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            callback(http.responseText);
        }
    }
    http.send(string_obj);
}
