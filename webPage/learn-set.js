var events = ['choseMenu','gameArea'];
var mainEvents ={
    'home':['navbar_home','choseMenu'],
    'newGame':['newgame','gameArea']
}


function testd(){
       x.setStartMode();
    for (k in mainEvents){
        //console.log(mainEvents[k]);
        addEvent(mainEvents[k]);
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
function addEvent(key){
    console.log(key[0]);
    
    var el = document.getElementById(key[0]);
    console.log(el);
    el.addEventListener('click',function(){goTo(key[1])},false);
}
function onStartTable(){
    x.onStart();
    //console.log('kk');
}
function onEventTable(){
    x.nextRound();
    
}
function somefunction(){
    console.log('hey');
}