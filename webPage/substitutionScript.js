
var changesList=[];
function asd(){
    var x=new getSubstitution();
    x.creatKeyList();
   // console.log(x.keyList);
    x.allKeyElements();
    //var a=x.returnCategoryName('teachersid');
   var a=x.changeIdForElements();
    //x.changeIdForElements();
    console.log(a);
    
    
}


function getSubstitution(){
    this.keyList={};
    this.substitutionList={};
    this.keyElements=[];
    this.changeIdForElements=function(){
        var changes=new Array(this.dataArray.length);
        for (var i=0;i<this.dataArray.length;i++){
            var actualChange=this.dataArray[i];
            var newObj={};
            for (k in actualChange){

                if (k == 'changes'){
                    /*
                    var toChange = actualChange[k];
                    for(var i=0; i<toChange.length;i++){
                        for (l in toChange[i]){
                           // console.log(l +"  "+toChange[i][l]);

                        }
                    }
    */
                }

                else{
                    var help='';
                    var categoryName=this.returnCategoryName(k);
                    if(categoryName == false){help=k}
                    var tableElement=this.changeToTable(actualChange[k]);
                    var value=this.findInCatgory(categoryName,tableElement);
                    //var newObj={}
                    newObj[categoryName]=value
                    //changes[i][categoryName]
                    
                    //actualChange[k]=value;
                    //console.log(a+"   "+value);
                }
                changes[i]=newObj;
                //console.log(actualChange);
            }
        }
        return changes;
    }
    this.changeToTable = function(element){
        
        if(element.constructor === Array){
            //if(Array.isArray(element)){console.log('yes')}
            //console.log('hi',element )
            return element;
            //console.log('is table:  ' + element +'  '+category )
        }
        else{
            var newElement=[];
            newElement[0]=element;
            return newElement;
            //console.log('is string: ' + element)
        }
        
    }
    this.removeLastCharakters=function(string){
        var len = string.length;
        return string.slice(0,len-4);
        
    }
    this.findInCatgory=function(category,element){
        if (element[0] == ""){return element};
        var findingList=this.keyList[category];
        //console.log(findingList);
        if(findingList == undefined){return element};
        var elementsToReturn=[];
        for(var i=0;i<findingList.length;i++){
            //console.log('loop');
            //console.log(element.length);
            for(var j=0;j<element.length;j++){
                for (k in findingList[i]){
                   // console.log(element[j],k)
                    if(k == element[j]){
                        //console.log(findingList[i][k])
                        elementsToReturn[j]=findingList[i][k];
                    }
                    break;
            }
                
                //return elementsToReturn;
                //console.log('abc',elementsToReturn);
                //else{console.log('a:  '+findingList[i][k],element)}
            }
        }
        //console.log('hey',element);
        return elementsToReturn;
    throw('invalid element or category in function findInCategory  '+element+'     '+category);  
    }
    this.allKeyElements=function(){
        var i=0
        for(k in this.keyList){
            this.keyElements[i]=k;
            //console.log(this.keyList);
            i++;
        }
    }
this.returnCategoryName=function(string){
    if(string.length>5){
        var slicedString=this.removeLastCharakters(string);
    }
    for(var i=0;i<this.keyElements.length;i++){
        //console.log(this.keyElements[i])
        var ifContain=this.isThereString(this.keyElements[i],slicedString);
        if(ifContain==true){return this.keyElements[i]};
        //console.log(ifContain);
    }
    return string;
    //throw('wrong string in function returnCategoryName')
    
}
this.isThereString=function(keyString,stringToFind) {
    return (keyString.indexOf(stringToFind) != -1);
}
this.creatKeyList=function(){
    for (k in this.keyArray){ //techer
        var category=this.keyArray[k];
        var num=0;
            this.keyList[k] = [];
        for(l in category){
            var element=category[l]
            var newObject={};
            newObject[element['id']] = element['short'];
             this.keyList[k][num]=newObject;
            num++;
            
        }

    }
    //console.log(keyLsit);
}

this.keyArray = {"teachers":{
"75":{"id":75,"name":"Pindur Zofia","short":"Pindur"},
"78":{"id":78,"name":"Stankowska Urszula","short":"Stankowska"},
"98":{"id":98,"name":"Cwołek Agnieszka","short":"Cwołek"},
"-7":{"id":-7,"name":"Wlisłocka Małgorzata","short":"Wlisłocka Małgorzata"},
"101":{"id":101,"name":"Glombik Artur","short":"Glombik"},
"108":{"id":108,"name":"Kucharz Ewelina","short":"Kucharz"},
"111":{"id":111,"name":"Rabsztyn Barbara","short":"Rabsztyn"},
"122":{"id":122,"name":"Mataczyński Grzegorz","short":"Mataczynski"},
"124":{"id":124,"name":"Sazanów Jolanta","short":"Sazanow"},
"-15":{"id":"-15","name":"Wiśniowicz Artur","short":"Wiśniowicz Artur"}},
"classes":{
"AB8383A5E60E7751":{"id":"AB8383A5E60E7751","name":"1gd","short":"1gd"},
"1B141C680F246401":{"id":"1B141C680F246401","name":"1a","short":"1a"},
"2891875F58158DD0":{"id":"2891875F58158DD0","name":"2a","short":"2a"},
"483A06429BAC5832":{"id":"483A06429BAC5832","name":"2b","short":"2b"},
"26E141B0DC950D93":{"id":"26E141B0DC950D93","name":"2c","short":"2c"},
"3CEA346CB6726060":{"id":"3CEA346CB6726060","name":"2d","short":"2d"},
"C28E85A4B422647C":{"id":"C28E85A4B422647C","name":"3a","short":"3a"}},
"subjects":{
"35":{"id":35,"name":"język polski","short":"polski"},
"40":{"id":40,"name":"matematyka","short":"matematyka"},
"45":{"id":45,"name":"biologia","short":"biologia"},
"47":{"id":47,"name":"fizyka","short":"fizyka"},
"54":{"id":54,"name":"wf","short":"wf"},
"89D438FE7417313E":{"id":"89D438FE7417313E","name":"sih 3","short":"sih 3"},
"D674369697EFC0DE":{"id":"D674369697EFC0DE","name":"matematyka 8","short":"matematyka 8"},
"02138B763A306E02":{"id":"02138B763A306E02","name":"sih 8","short":"sih 8"}},
"classrooms":{
"4":{"id":4,"name":"5","short":"5"},
"8B82690C1E6C5BA0":{"id":"8B82690C1E6C5BA0","name":"9","short":"9"},
"85F7E7BFF7DE1CDD":{"id":"85F7E7BFF7DE1CDD","name":"10","short":"10"},
"5851B116FFF07778":{"id":"5851B116FFF07778","name":"21","short":"21"},
"628D6B2D80ED0133":{"id":"628D6B2D80ED0133","name":"32","short":"32"},
"083B4B00D8AA754E":{"id":"083B4B00D8AA754E","name":"46","short":"46"},
"A1F143F9F27783BE":{"id":"A1F143F9F27783BE","name":"0 gim","short":"0gim"}},
"periods":[
{"name":"1","short":"1","starttime":"07:25","endtime":"08:10","id":"0"},
{"name":"2","short":"2","starttime":"08:15","endtime":"09:00","id":"1"},
{"name":"3","short":"3","starttime":"09:10","endtime":"09:55","id":"2"},
{"name":"4","short":"4","starttime":"10:05","endtime":"10:50","id":"3"},
{"name":"5","short":"5","starttime":"11:00","endtime":"11:45","id":"4"},
{"name":"6","short":"6","starttime":"12:05","endtime":"12:50","id":"5"},
{"name":"7","short":"7","starttime":"13:00","endtime":"13:45","id":"6"},
{"name":"8","short":"8","starttime":"13:55","endtime":"14:40","id":"7"}],
"absent_types":{
"5DCBE154994C7BB1":{"id":"5DCBE154994C7BB1","name":"Urlop okolicznościowy","short":"Urlop okolicznościowy"},
"81CEF962273F7C6D":{"id":"81CEF962273F7C6D","name":"wyjście z klasą","short":"wyjście z klasą"}},
"substitution_types":{
"E86C1B744DD94653":{"id":"E86C1B744DD94653","name":"płatne","short":"płatne"}}}







this.dataArray=
[{"cancelled":true,"note":"","substitution_typeid":"",
"changes":[
{"column":"subjectid","old":54},
{"column":"teacherids","old":124},
{"column":"classids","old":"1B141C680F246401"},
{"column":"classroomids","old":"A1F143F9F27783BE"}],"period":"0","subjectid":54,
"teacherids":[124],
"classids":["1B141C680F246401"],
"classroomids":["A1F143F9F27783BE"],
"groupnames":["Chłopcy"],"type":"card","periodorbreak":"00P","moje":false},
{"cancelled":true,"substitution_typeid":"",
"changes":[
{"column":"subjectid","old":35},
{"column":"teacherids","old":75},
{"column":"classids","old":"AB8383A5E60E7751"},
{"column":"classroomids","old":"5851B116FFF07778"}],"period":"5","subjectid":35,
"teacherids":[75],
"classids":["AB8383A5E60E7751"],
"classroomids":["5851B116FFF07778"],
"groupnames":[""],"type":"card","periodorbreak":"05P","moje":false},
{"cancelled":true,"substitution_typeid":"",
"changes":[
{"column":"subjectid","old":35},
{"column":"teacherids","old":75},
{"column":"classids","old":"AB8383A5E60E7751"},
{"column":"classroomids","old":"5851B116FFF07778"}],"period":"6","subjectid":35,
"teacherids":[75],
"classids":["AB8383A5E60E7751"],
"classroomids":["5851B116FFF07778"],
"groupnames":[""],"type":"card","periodorbreak":"06P","moje":false},
{"cancelled":true,"substitution_typeid":"",
"changes":[
{"column":"subjectid","old":40},
{"column":"teacherids","old":98},
{"column":"classids","old":"AB8383A5E60E7751"},
{"column":"classroomids","old":"8B82690C1E6C5BA0"}],"period":"7","subjectid":40,
"teacherids":[98],
"classids":["AB8383A5E60E7751"],
"classroomids":["8B82690C1E6C5BA0"],
"groupnames":[""],"type":"card","periodorbreak":"07P","moje":false},
{"cancelled":true,"substitution_typeid":"",
"changes":[
{"column":"subjectid","old":45},
{"column":"teacherids","old":108},
{"column":"classids","old":"AB8383A5E60E7751"},
{"column":"classroomids","old":"85F7E7BFF7DE1CDD"}],"period":"2","subjectid":45,
"teacherids":[108],
"classids":["AB8383A5E60E7751"],
"classroomids":["85F7E7BFF7DE1CDD"],
"groupnames":["1. Grupa"],"type":"card","periodorbreak":"02P","moje":false},
{"cancelled":true,"substitution_typeid":"",
"changes":[
{"column":"subjectid","old":45},
{"column":"teacherids","old":108},
{"column":"classids","old":"AB8383A5E60E7751"},
{"column":"classroomids","old":"85F7E7BFF7DE1CDD"}],"period":"1","subjectid":45,
"teacherids":[108],
"classids":["AB8383A5E60E7751"],
"classroomids":["85F7E7BFF7DE1CDD"],
"groupnames":["2. Grupa"],"type":"card","periodorbreak":"01P","moje":false},
{"cancelled":true,"substitution_typeid":"",
"changes":[
{"column":"subjectid","old":47},
{"column":"teacherids","old":111},
{"column":"classids","old":"AB8383A5E60E7751"},
{"column":"classroomids","old":"083B4B00D8AA754E"}],"period":"1","subjectid":47,
"teacherids":[111],
"classids":["AB8383A5E60E7751"],
"classroomids":["083B4B00D8AA754E"],
"groupnames":["1. Grupa"],"type":"card","periodorbreak":"01P","moje":false},
{"cancelled":true,"substitution_typeid":"",
"changes":[
{"column":"subjectid","old":47},
{"column":"teacherids","old":111},
{"column":"classids","old":"AB8383A5E60E7751"},
{"column":"classroomids","old":"083B4B00D8AA754E"}],"period":"2","subjectid":47,
"teacherids":[111],
"classids":["AB8383A5E60E7751"],
"classroomids":["083B4B00D8AA754E"],
"groupnames":["2. Grupa"],"type":"card","periodorbreak":"02P","moje":false},
{"cancelled":true,"note":"","substitution_typeid":"",
"changes":[
{"column":"subjectid","old":54},
{"column":"teacherids","old":124},
{"column":"classids","old":"1B141C680F246401"},
{"column":"classroomids","old":"A1F143F9F27783BE"}],"period":"1","subjectid":54,
"teacherids":[124],
"classids":["1B141C680F246401"],
"classroomids":["A1F143F9F27783BE"],
"groupnames":["Chłopcy"],"type":"card","periodorbreak":"01P","moje":false},
{"cancelled":true,"note":"","substitution_typeid":"",
"changes":[
{"column":"subjectid","old":54},
{"column":"teacherids","old":124},
{"column":"classids","old":"C28E85A4B422647C"},
{"column":"classroomids","old":"A1F143F9F27783BE"}],"period":"2","subjectid":54,
"teacherids":[124],
"classids":["C28E85A4B422647C"],
"classroomids":["A1F143F9F27783BE"],
"groupnames":["Dziewczęta"],"type":"card","periodorbreak":"02P","moje":false},
    
{"cancelled":false,"substitution_typeid":"E86C1B744DD94653","note":"",
"changes":[
{"column":"teacherids","old":101,"new":78}],"period":"3","subjectid":"89D438FE7417313E",
"teacherids":[101],
"classids":["2891875F58158DD0",
"3CEA346CB6726060"],
"classroomids":[4],
"groupnames":["seminargroup:3"],"type":"card","periodorbreak":"03P","moje":false},
{"cancelled":false,"substitution_typeid":"E86C1B744DD94653","note":"",
"changes":[
{"column":"teacherids","old":101,"new":-7},
{"column":"subjectid","old":"02138B763A306E02","new":"D674369697EFC0DE"}],"period":"4","subjectid":"02138B763A306E02",
"teacherids":[101],
"classids":["2891875F58158DD0",
"483A06429BAC5832","26E141B0DC950D93","3CEA346CB6726060"],
"classroomids":["628D6B2D80ED0133"],
"groupnames":["seminargroup:1"],"type":"card","periodorbreak":"04P","moje":false},
{"cancelled":true,"substitution_typeid":"",
"changes":[
{"column":"subjectid","old":54},
{"column":"teacherids","old":"-15"},
{"column":"classids","old":"AB8383A5E60E7751"},
{"column":"classroomids","old":"A1F143F9F27783BE"}],"period":"3","subjectid":54,
"teacherids":["-15"],
"classids":["AB8383A5E60E7751"],
"classroomids":["A1F143F9F27783BE"],
"groupnames":["Chłopcy"],"type":"card","periodorbreak":"03P","moje":false},
{"cancelled":true,"substitution_typeid":"",
"changes":[
{"column":"subjectid","old":54},
{"column":"teacherids","old":"-15"},
{"column":"classids","old":"AB8383A5E60E7751"},
{"column":"classroomids","old":"A1F143F9F27783BE"}],"period":"4","subjectid":54,
"teacherids":["-15"],
"classids":["AB8383A5E60E7751"],
"classroomids":["A1F143F9F27783BE"],
"groupnames":["Chłopcy"],"type":"card","periodorbreak":"04P","moje":false},
{"cancelled":true,"substitution_typeid":"",
"changes":[
{"column":"subjectid","old":54},
{"column":"teacherids","old":122},
{"column":"classids","old":"AB8383A5E60E7751"},
{"column":"classroomids","old":"A1F143F9F27783BE"}],"period":"3","subjectid":54,
"teacherids":[122],
"classids":["AB8383A5E60E7751"],
"classroomids":["A1F143F9F27783BE"],
"groupnames":["Dziewczęta"],"type":"card","periodorbreak":"03P","moje":false},
{"cancelled":true,"substitution_typeid":"",
"changes":[
{"column":"subjectid","old":54},
{"column":"teacherids","old":122},
{"column":"classids","old":"AB8383A5E60E7751"},
{"column":"classroomids","old":"A1F143F9F27783BE"}],"period":"4","subjectid":54,
"teacherids":[122],
"classids":["AB8383A5E60E7751"],
"classroomids":["A1F143F9F27783BE"],
"groupnames":["Dziewczęta"],"type":"card","periodorbreak":"04P","moje":false}]
}