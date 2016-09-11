var events = ['choseMenu','gameArea'];
var mainEvents ={
    'home':['navbar_home','choseMenu'],
    'newGame':['newgame','gameArea']
}
var gcode = [[0,4.3],[3.6,6.4],[6.4,4.7],[7.9,1],[6.1,-4],[3.6,-5.9],[0,-7.9],[-3.6,-5.9],[-6.1,-4],[-7.9,1],[-6.4,4.7],[-3.6,6.4],[0,4.3]];
var commands="";
function addCommand(comand){
    commands+=comand+'\n';
    
}
function newFunc(){
    var newPoint=[];
    for(var i=0;i<gcode.length;i++){
        newPoint=gcode[i];
        addCommand('G1 x' +newPoint[0]+' y'+newPoint[1]);
    }
}
function createOutLine(){
    var beginPoint=[];
    var endPoint=[];
    var newPoint=[];
    var l=gcode.length;
    for(var i=0 ;i<gcode.length-1;i++){
        beginPoint=gcode[i];
        endPoint=gcode[i+1];
        newPoint[0]=endPoint[0]-beginPoint[0];
        newPoint[1]=endPoint[1]-beginPoint[1];
        newPoint[0]=Math.floor(newPoint[0]*10)/5;
        newPoint[1]=Math.floor(newPoint[1]*10)/5;
        //var w=Math.floor(newPoint[0]*100)/50;
        addCommand('G1 x' +newPoint[0]+' y'+newPoint[1]);
        //console.log(w);
    }
    beginPoint=gcode[1];
    endPoint=gcode[l-1];
        newPoint[0]=endPoint[0]-beginPoint[0];
        newPoint[1]=endPoint[1]-beginPoint[1];
        newPoint[0]=Math.floor(newPoint[0]*10)/5;
        newPoint[1]=Math.floor(newPoint[1]*10)/5;
        addCommand('G1 x' +newPoint[0]+' y'+newPoint[1]);
        addCommand("G1 x0 y-8.6")
}
function createInLine(){
        var beginPoint;
    var endPoint;
    var newPoint=[];
    var l=gcode.length;
    for(var i=1 ;i<gcode.length-1;i++){
        beginPoint=2*gcode[i][0];
        endPoint=2*gcode[i][1];
        addCommand('G1 x' +beginPoint+' y'+endPoint);
        addCommand('G1 x' +reverseNumber(beginPoint)+' y'+reverseNumber(endPoint));
        //console.log(w);
    }
    
}
function allComnads(){
    //createOutLine();
    //createInLine();
    newFunc();
    console.log(commands);    
}
function reverseNumber(a){
 
    return -a;
}

function newGameSession(){
    x.clearTable();
    x.onStart();
    x.onEnd();
    
}
function testd(){
       x.setStartMode();
    for (k in mainEvents){
        //console.log(mainEvents[k]);
        changeDisplayOnClick(mainEvents[k]);
    }
    console.log('hh');
}
function hey(){
    for(var i=0;i<2;i++)
    var el = document.getElementById('gameArea')
    el.style.display = 'block';
    
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
function onStartTable(){
    x.onStart();
    x.nextRound();
    //console.log('kk');
}
function onEventTable(){
    x.nextRound();
    
}
function somefunction(){
    console.log('hey');
}