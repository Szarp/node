
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

function testNumberFive(){
    for (k in mainEvents){
        //console.log(mainEvents[k]);
        changeDisplayOnClick(mainEvents[k]);
    }
    console.log('hi');
}
function testNumberFour(){
    //sendObj('/testXml',obj,hey);
//    /getChange();
    var z = new translateChanges();
    z.data=exData;
    z.displayData();
    
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
function fieldsToFill(){
    this.fields={
        cancelled:'typ',
        note:'komentarz',
        periods:'lekcja',
        subject:'przedmiot',
        teachers:'nauczyciel',
        classes:'klasa',
        classrooms:'sala',
        groupnames:'grupa',
        changes:'zmiany',
        substitution_types:'rodzaj'
    }
}
function translateChanges(){
    //this.data
    this.divId='someId';
    this.parsedData="";
    this.finalTables="";
    fieldsToFill.call(this);
    this.displayData=function(){
        this.getChange();
        this.tableTest();
    }
    this.getChange = function(){
        var string="";
        for(var j=0;j<this.data.length;j++){
            this.assignParams(this.data[j]);
            string=this.beginOfTable()+this.parsedData+this.endOfTable();
            //
            this.finalTables+=string;
            this.parsedData="";
            //console.log(fi//);
        }

    }
    this.addToArray=function(keyText,keyValue,tabs){
        var text = this.createElement(keyText,keyValue,tabs);
        if(text !=""){
            this.parsedData+=text;
            //this.i++;
        }
    }
    this.tableTest=function(){
        var el = document.getElementById(this.divId);
        var text="";
        //console.log(a.innerHTML);
        el.innerHTML=this.finalTables;
    }
    this.assignParams = function(oneChange){
        this.i=0;
        var keyText="";
        var keyValue=""
        for (k in oneChange){
    //console.log('hey',k);
    //console.log('hey',this.fields);
            if(k=='cancelled'){
                keyText=this.fields[k];
                keyValue=this.getType(oneChange[k]);
                this.addToArray(keyText,keyValue,0);
            }
            else if(k=='changes'){
                this.addToArray('zastępstwo','jest',0);
                var changesIn=oneChange[k]
                for(l in changesIn){
                    keyText=this.fields[l];
                    keyValue=changesIn[l];   
                    this.addToArray(keyText,keyValue,1);
                    //console.log(keyText,keyValue);
                }
                
                //keyText=undefined;
                //console.log('some changes');
            }
            else{
                keyText=this.fields[k];
                keyValue=oneChange[k];
                this.addToArray(keyText,keyValue,0);
            }
            
            
            
            
        }
        
        
    }
    this.getType= function(value){
        if(value=='true'){
            this.style='backBlue'
            return 'anulowanie';
        }
        else{
            this.style='backRed'
            return 'zastępstwo';
        }
    }
    this.createElement=function(key,value,tabs){
        if(key==undefined||value==""){return '';};
        var tabString=this.createTabs(tabs);
        //console.log('tabs',tabs);
        var string = '<tr><td>'+tabString+'"'+key+'":<span>"'+value+'"</span></td></tr>';
        return string;
    }
    this.createTabs=function(tabs){
        var tabString="";
        for(var i=0;i<tabs*4;i++){
            tabString+='a';
        }
        if(tabs !=0){
            return '<span style="visibility: hidden;">'+tabString+'</span>'
        }
        else{
            return '';
        }
        
    }
    this.beginOfTable=function(){
        return '<table class="displayChanges '+this.style+'"><tbody>'
        
    }
    this.endOfTable=function(){
        return '</tbody></table>';
    }
    
}
    
var exData =[
    {"cancelled":[true],"note":[""],"substitution_types":[""],"type":["card"],"periods":["1"],"subjects":["angielski"],"teachers":["Ceglinska"],"classes":["2b"],"classrooms":["5"],"groupnames":["2. Grupa"],"periodorbreak":["00P"],"moje":[false]},{"cancelled":[false],"substitution_types":["płatne"],"note":[""],"changes":{"teachers":["Ogrocka"],"subjects":["historia 5"]},"type":["card"],"periods":["3"],"subjects":["polski 5"],"teachers":["Stankowska"],"classes":["2a","2b","2c","2d"],"classrooms":["31"],"groupnames":["seminargroup:4"],"periodorbreak":["02P"],"moje":[false]},{"cancelled":[false],"substitution_types":["za III GD"],"note":[""],"changes":{"teachers":["Achtelik"],"subjects":["g.wych"]},"type":["card"],"periods":["3"],"subjects":["wos"],"teachers":["Antonowicz"],"classes":["2gd"],"classrooms":["13"],"groupnames":[""],"periodorbreak":["02P"],"moje":[false]},{"cancelled":[false],"substitution_types":["łączone"],"note":[""],"changes":{"teachers":["Taca Andrzej"]},"type":["card"],"periods":["4"],"subjects":["wf"],"teachers":["Głodny Szymon"],"classes":["1gc"],"classrooms":["0gim"],"groupnames":["Dziewczęta"],"periodorbreak":["03P"],"moje":[false]},{"cancelled":[false],"substitution_types":["płatne"],"note":[""],"changes":{"teachers":["Ogrocka"]},"type":["card"],"periods":["4"],"subjects":["sih 3"],"teachers":["Glombik"],"classes":["2a","2d"],"classrooms":["5"],"groupnames":["seminargroup:3"],"periodorbreak":["03P"],"moje":[false]},{"cancelled":[false],"substitution_types":["płatne"],"note":[""],"changes":{"teachers":["Jałowiecki"],"subjects":["matematyka"]},"type":["card"],"periods":["4"],"subjects":["biologia 4"],"teachers":["Kucharz"],"classes":["2b","2c"],"classrooms":["10"],"groupnames":["seminargroup:4"],"periodorbreak":["03P"],"moje":[false]},{"cancelled":[false],"substitution_types":["płatne"],"note":[""],"changes":{"teachers":["Kruszelnicka"]},"type":["card"],"periods":["4"],"subjects":["angielski"],"teachers":["Pilch"],"classes":["3d"],"classrooms":["33"],"groupnames":["1. Grupa"],"periodorbreak":["03P"],"moje":[false]},{"cancelled":[false],"substitution_types":["płatne"],"note":[""],"changes":{"teachers":["Pordzik"],"subjects":["g.wych"]},"type":["card"],"periods":["5"],"subjects":["polski"],"teachers":["Stankowska"],"classes":["1c"],"classrooms":["31"],"groupnames":[""],"periodorbreak":["04P"],"moje":[false]},{"cancelled":[false],"substitution_types":["łączone"],"note":[""],"changes":{"teachers":["Taca Andrzej"]},"type":["card"],"periods":["5"],"subjects":["wf"],"teachers":["Głodny Szymon"],"classes":["1gc"],"classrooms":["0gim"],"groupnames":["Dziewczęta"],"periodorbreak":["04P"],"moje":[false]},{"cancelled":[false],"substitution_types":["płatne"],"note":[""],"changes":{"teachers":["Skoczylas Ewa"],"subjects":["niemiecki"]},"type":["card"],"periods":["5"],"subjects":["sih 8"],"teachers":["Glombik"],"classes":["2a","2b","2c","2d"],"classrooms":["32"],"groupnames":["seminargroup:1"],"periodorbreak":["04P"],"moje":[false]},{"cancelled":[false],"substitution_types":["płatne"],"note":[""],"changes":{"teachers":["Wiencierz"],"subjects":["matematyka"]},"type":["card"],"periods":["5"],"subjects":["przyroda 5"],"teachers":["Kucharz"],"classes":["2a","2b","2c","2d"],"classrooms":["10"],"groupnames":["seminargroup:4"],"periodorbreak":["04P"],"moje":[false]},{"cancelled":[false],"substitution_types":["łączone"],"note":[""],"changes":{"teachers":["Mazur Iza"]},"type":["card"],"periods":["2"],"subjects":["wf"],"teachers":["Głodny Szymon"],"classes":["1b"],"classrooms":["0gim"],"groupnames":["Dziewczęta"],"periodorbreak":["01P"],"moje":[false]},{"cancelled":[false],"substitution_types":["płatne"],"note":[""],"changes":{"teachers":["Marian Aleksandra"],"subjects":["chemia 3"]},"type":["card"],"periods":["5"],"subjects":["biologia 3"],"teachers":["Antonowicz"],"classes":["2a","2d"],"classrooms":["22"],"groupnames":["seminargroup:5"],"periodorbreak":["04P"],"moje":[false]},{"cancelled":[false],"substitution_types":["płatne"],"note":[""],"changes":{"teachers":["Wlisłocka Małgorzata"],"subjects":["matematyka"]},"type":["card"],"periods":["5"],"subjects":["angielski"],"teachers":["Ceglinska"],"classes":["3a"],"classrooms":["5"],"groupnames":["1. Grupa"],"periodorbreak":["04P"],"moje":[false]},{"cancelled":[false],"substitution_types":["za III GD"],"note":[""],"changes":{"teachers":["Kaczmar"],"subjects":["niemiecki"]},"type":["card"],"periods":["5"],"subjects":["polski"],"teachers":["Żmuda Paweł"],"classes":["3d"],"classrooms":["3"],"groupnames":[""],"periodorbreak":["04P"],"moje":[false]},{"cancelled":[false],"substitution_types":["płatne"],"note":[""],"changes":{"teachers":["Pordzik"],"subjects":["francuski"]},"type":["card"],"periods":["6"],"subjects":["angielski"],"teachers":["Ceglinska"],"classes":["1a","1c"],"classrooms":["5"],"groupnames":["seminargroup:2"],"periodorbreak":["05P"],"moje":[false]},{"cancelled":[false],"substitution_types":["płatne"],"note":[""],"changes":{"teachers":["Niezgoda"],"subjects":["niemiecki"]},"type":["card"],"periods":["6"],"subjects":["angielski"],"teachers":["Pilch"],"classes":["1a","1c"],"classrooms":["19"],"groupnames":["seminargroup:4"],"periodorbreak":["05P"],"moje":[false]},{"cancelled":[false],"substitution_types":["płatne"],"note":[""],"changes":{"teachers":["Adam"],"subjects":["chemia"]},"type":["card"],"periods":["6"],"subjects":["biologia"],"teachers":["Kucharz"],"classes":["1d"],"classrooms":["10"],"groupnames":[""],"periodorbreak":["05P"],"moje":[false]},{"cancelled":[false],"substitution_types":["płatne"],"note":[""],"changes":{"teachers":["Cwołek"],"subjects":["matematyka"]},"type":["card"],"periods":["6"],"subjects":["polski"],"teachers":["Żmuda Paweł"],"classes":["2a"],"classrooms":["3"],"groupnames":[""],"periodorbreak":["05P"],"moje":[false]},{"cancelled":[false],"substitution_types":["płatne"],"note":[""],"changes":{"teachers":["Jałowiecki"],"subjects":["matematyka"]},"type":["card"],"periods":["6"],"subjects":["g.wych"],"teachers":["Stankowska"],"classes":["2c"],"classrooms":["31"],"groupnames":[""],"periodorbreak":["05P"],"moje":[false]},{"cancelled":[false],"substitution_types":["za 9 lekcję"],"note":[""],"changes":{"teachers":["Burnus"],"subjects":["religia"],"classrooms":["14"]},"type":["card"],"periods":["6"],"subjects":["biologia"],"teachers":["Antonowicz"],"classes":["2gb"],"classrooms":["28"],"groupnames":[""],"periodorbreak":["05P"],"moje":[false]},{"cancelled":[false],"substitution_types":["płatne"],"note":[""],"changes":{"teachers":["Wróbel"],"subjects":["informatyka"],"classrooms":["37"]},"type":["card"],"periods":["7"],"subjects":["historia"],"teachers":["Glombik"],"classes":["1d"],"classrooms":["10"],"groupnames":["2. Grupa"],"periodorbreak":["06P"],"moje":[false]},{"cancelled":[true],"note":[""],"substitution_types":[""],"type":["card"],"periods":["2"],"subjects":["biologia"],"teachers":["Antonowicz"],"classes":["1gb"],"classrooms":["3"],"groupnames":["1. Grupa"],"periodorbreak":["01P"],"moje":[false]},{"cancelled":[false],"substitution_types":["łączone"],"note":[""],"changes":{"teachers":["Lee"],"classrooms":["5"]},"type":["card"],"periods":["7"],"subjects":["angielski"],"teachers":["Pilch"],"classes":["2gb"],"classrooms":["19"],"groupnames":["2. Grupa"],"periodorbreak":["06P"],"moje":[false]},{"cancelled":[true],"note":[""],"substitution_types":[""],"type":["card"],"periods":["7"],"subjects":["angielski"],"teachers":["Ceglinska"],"classes":["3ga"],"classrooms":["5"],"groupnames":["2. Grupa"],"periodorbreak":["06P"],"moje":[false]},{"cancelled":[true],"note":[""],"substitution_types":[""],"type":["card"],"periods":["8"],"subjects":["historia"],"teachers":["Glombik"],"classes":["1d"],"classrooms":["10"],"groupnames":["1. Grupa"],"periodorbreak":["07P"],"moje":[false]},{"cancelled":[true],"note":[""],"substitution_types":[""],"type":["card"],"periods":["8"],"subjects":["angielski"],"teachers":["Ceglinska"],"classes":["3b"],"classrooms":["5"],"groupnames":["1. Grupa"],"periodorbreak":["07P"],"moje":[false]},{"cancelled":[false],"substitution_types":["płatne"],"note":[""],"changes":{"teachers":["Kruszelnicka"]},"type":["card"],"periods":["8"],"subjects":["angielski"],"teachers":["Pilch"],"classes":["3c"],"classrooms":["49"],"groupnames":["2. Grupa"],"periodorbreak":["07P"],"moje":[false]},{"cancelled":[true],"note":[""],"substitution_types":[""],"type":["card"],"periods":["8"],"subjects":["wf"],"teachers":["Głodny Szymon"],"classes":["3gc"],"classrooms":["0gim"],"groupnames":["Dziewczęta"],"periodorbreak":["07P"],"moje":[false]},{"cancelled":[true],"note":[""],"substitution_types":[""],"type":["card"],"periods":["9"],"subjects":["wf"],"teachers":["Głodny Szymon"],"classes":["3gc"],"classrooms":["0gim"],"groupnames":["Dziewczęta"],"periodorbreak":["08P"],"moje":[false]},{"cancelled":[true],"substitution_types":[""],"type":["card"],"periods":["4"],"subjects":["niemiecki"],"teachers":["Zajdel"],"classes":["3gd"],"classrooms":["32"],"periodorbreak":["03P"],"moje":[false]},{"cancelled":[true],"substitution_types":[""],"type":["card"],"periods":["8"],"subjects":["matematyka"],"teachers":["Drohojowski"],"classes":["3gd"],"classrooms":["4"],"periodorbreak":["07P"],"moje":[false]},{"cancelled":[true],"substitution_types":[""],"type":["card"],"periods":["7"],"subjects":["religia"],"teachers":["Burnus"],"classes":["3gd"],"classrooms":["14"],"periodorbreak":["06P"],"moje":[false]},{"cancelled":[true],"note":[""],"substitution_types":[""],"type":["card"],"periods":["2"],"subjects":["biologia"],"teachers":["Kucharz"],"classes":["1gd"],"classrooms":["10"],"groupnames":["2. Grupa"],"periodorbreak":["01P"],"moje":[false]},{"cancelled":[true],"substitution_types":[""],"type":["card"],"periods":["6"],"subjects":["religia"],"teachers":["Burnus"],"classes":["3gd"],"classrooms":["14"],"periodorbreak":["05P"],"moje":[false]},{"cancelled":[true],"substitution_types":[""],"type":["card"],"periods":["4"],"subjects":["niemiecki"],"teachers":["Kaczmar"],"classes":["3gd"],"classrooms":["7"],"periodorbreak":["03P"],"moje":[false]},
    {"cancelled":[true],"substitution_types":[""],"type":["card"],"periods":["3"],"subjects":["zajęcia techniczne"],"teachers":["Achtelik"],"classes":["3gd"],"classrooms":["34"],"periodorbreak":["02P"],"moje":[false]},{"cancelled":[false],"changes":{},"type":["card"],"periods":["5"],"subjects":["zaj art"],"teachers":["Kupiec"],"classes":["3gc","3gd"],"classrooms":["42"],"periodorbreak":["04P"],"moje":[false]},{"cancelled":[false],"changes":{},"type":["card"],"periods":["5"],"subjects":["zaj art"],"teachers":["Warzecha"],"classes":["3gc","3gd"],"classrooms":["47"],"periodorbreak":["04P"],"moje":[false]},{"cancelled":[true],"substitution_types":[""],"type":["card"],"periods":["3"],"subjects":["niemiecki"],"teachers":["Kaczmar"],"classes":["3gd"],"classrooms":["7"],"periodorbreak":["02P"],"moje":[false]},{"cancelled":[true],"substitution_types":[""],"type":["card"],"periods":["2"],"subjects":["polski"],"teachers":["Stankowska"],"classes":["3gd"],"classrooms":["31"],"periodorbreak":["01P"],"moje":[false]},{"cancelled":[false],"substitution_types":["łączone"],"note":[""],"changes":{"teachers":["Aureliusz Wieczorek"],"classrooms":["10"]},"type":["card"],"periods":["2"],"subjects":["angielski"],"teachers":["Ceglinska"],"classes":["2b"],"classrooms":["5"],"groupnames":["1. Grupa"],"periodorbreak":["01P"],"moje":[false]},{"cancelled":[true],"note":[""],"substitution_types":[""],"type":["card"],"periods":["3"],"subjects":["polski"],"teachers":["Żmuda Paweł"],"classes":["1d"],"classrooms":["36"],"groupnames":[""],"periodorbreak":["02P"],"moje":[false]},{"cancelled":[false],"substitution_types":["płatne"],"note":[""],"changes":{"teachers":["Błaszczykowska"],"subjects":["biologia"],"classrooms":["33"]},"type":["card"],"periods":["3"],"subjects":["angielski"],"teachers":["Ceglinska"],"classes":["1ga"],"classrooms":["5"],"groupnames":["1. Grupa"],"periodorbreak":["02P"],"moje":[false]},{"cancelled":[false],"substitution_types":["łączone"],"note":[""],"changes":{"teachers":["Błaszczykowska"],"subjects":["biologia"]},"type":["card"],"periods":["3"],"subjects":["angielski"],"teachers":["Pilch"],"classes":["1ga"],"classrooms":["33"],"groupnames":["2. Grupa"],"periodorbreak":["02P"],"moje":[false]},{"cancelled":[false],"substitution_types":["za III GD"],"note":[""],"changes":{"teachers":["Kaczmar"],"subjects":["niemiecki"],"classrooms":["7"]},"type":["card"],"periods":["3"],"subjects":["biologia"],"teachers":["Kucharz"],"classes":["1gd"],"classrooms":["10"],"groupnames":["1. Grupa"],"periodorbreak":["02P"],"moje":[false]}]