var last=-1;
    var x = new speedSetFinding();
//var time = new measureTime();
function tryOnceMore(){

    //x.cardFromNumber(80);
     //x.setEventToTable(function(){console.log('hey')});
    //x.prepareTable();

    if(last<=0){last=1;}
    else{
        x.nextRound();
    }
    //x.onEnd();
    //time.stopStart();
    //console.log(y);
}

function speedSetFinding(){
    //mode = random, from full deck
    //gameSession.call(this);
    this.roundCounter;
    this.whenEnd=3;
    measureTime.call(this);
    gameSession.call(this);
    deckOfCards.call(this);
    cards.call(this);
    clickTheTable.call(this);
    this.onStart = function(){
        this.roundCounter=0;
        this.startTime();
        //this.nextRound;
        //this.test();
        this.prepareTable('on');
    }
    this.nextRound = function(){
        this.roundCounter++;
        this.prepareData();
        if(this.roundCounter>this.whenEnd){
            this.onEnd();
        }
        
    }
    this.onEnd = function(){
        this.endTime();
        this.prepareTable('off');
        console.log(this.difference);
        //funcToRestart
        //throw('must restart');
        //time end
        //show what u have done
        
    }
    this.prepareData = function(){
        var randCards = [this.fromRandom(),this.fromRandom()];
        this.fillFindTableRandom(randCards);
        this.fillPattern(randCards);
    }
    this.prepareTable = function(state){
        if(state =='on'){
            this.setEventToTable();
        }
        else if(state == 'off'){
            this.removeEventToTable();
            this.clearTable();
        }
        else{ throw('wrong state:'+ state+ 'in function prepareTable')}
    }
    this.test = function(){
        console.log('hhy');
        
    }
}
function gameSession(){
    this.startBtn = 'start';
    //speedSetFinding.call(this);
    cards.call(this);
    deckOfCards.call(this);
    clickTheTable.call(this);
    this.setStartMode = function(){
        var el = document.getElementById(this.startBtn);
        el.addEventListener("click",onStartTable,false);
        //console.log('tutaj event');
        
    }
    this.fillPattern = function(cards){
        
        for(var i=0;i<this.pattern.length;i++){
            this.cardParametrs(this.pattern[i],cards[i]);
            
        }
    }
    //do poprawy 
    this.fillFindTableRandom = function(twoCards){
        if(twoCards.length != 2){
            throw('wrong nuber of cards in function fillFindTable');
        }
        var thirdCard = this.findThirdCard(twoCards[0],twoCards[1])
        var fillTableLength = this.findTable.length;
        var cardsToFill = [];
        for(var i=0;i<fillTableLength;i++){
            cardsToFill[i] = this.fromRandom();
            //this.cardParametrs(this.pattern[i],cards[i]);
            
        }
        cardsToFill[this.randomOneOf(fillTableLength)] = thirdCard;
        for(var i=0;i<fillTableLength;i++){
            this.cardParametrs(this.findTable[i],cardsToFill[i]);
        }
        
    }
    this.randomOneOf = function(number){
        var x = 10;
        if(number>10){x=100;}
        if(number>100){x=1000;}
        var randomNumber = Math.floor(Math.random()*x);
        return randomNumber % number;
    }
    //done add events for click
    //how those events should look
    //done create deck of cards
    //save those cards
    //done measure time
    //check if set
    
    
}
function clickTheTable(){
    this.somefunction = function(){console.log('hey');};
    this.pattern = ['pat0','pat1'];
    this.findTable = ['try0','try1','try2','try3'];
    var el;
    this.setEventToTable = function(){
        for(var i=0;i<this.findTable.length;i++){
            el = document.getElementById(this.findTable[i]);
            el.addEventListener("click", onEventTable, false);
            //console.log('i tutaj tez');
        }
    }
    this.removeEventToTable = function(){
        for(var i=0;i<this.findTable.length;i++){
            el = document.getElementById(this.findTable[i]);
            el.removeEventListener("click", onEventTable, false);
            //console.log('i tutaj tez');
            
        }
        
    }
    this.clearTable = function(){
        for(var i=0;i<this.findTable.length;i++){
            this.clearField(this.findTable[i]);
        }
        for(var i=0;i<this.pattern.length;i++){
            this.clearField(this.pattern[i]);
        }
    }
}
function deckOfCards(){
    this.findThirdCard = function(first,secend){
        var thirdCard = [0,0,0,0];
        //this.pattern = [0,1,2];
        for (var i=0;i<4;i++){
            if(first[i]==secend[i]){
                thirdCard[i] = first[i];   
            }
            else{thirdCard[i] = 3 -first[i] - secend[i]; 
                
            }
        }
        return thirdCard;
    }
    this.createSimilarCards = function(pattern){
        console.log(pattern);
        this.z = pattern;
        var z =pattern
        this.w = this.z;
        this.w[1]='hey';
        console.log(this.z,z,pattern);
      
        //console.log(z);
        //similarCards[x]=[0,0,0,0];
        return;// similarCards;
    }
    this.fromRandom = function(){
        //do until function but dont know how
        var randomNumber = Math.floor(Math.random()*10000);
        if(randomNumber == this.lastRandom){
            randomNumber = Math.floor(Math.random()*10000);
        }
        this.lastRandom = randomNumber;
        var card = [0,0,0,0];
        for (var i = 0; i<4; i++){
            card[i] = randomNumber%10;
            randomNumber -= card[i];
            randomNumber = randomNumber/10;
            card[i] = card[i]%3;
        }
        return card;    
    }
    this.fullSetDeck = function(){
        var newDeck = this.numberDeck();
        console.log(newDeck);
        var shuffledDeck = this.shuffle(newDeck);
        var setDeck = [];
        for(var i=0;i<81;i++){
            setDeck[i]=this.cardFromNumber(shuffledDeck[i]);
        }
        return setDeck;
    }
    this.shuffle = function(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
    }
    this.numberDeck =function(){
        var deck=[];
        for(var i=0;i<81;i++){
            deck[i]=i;
        }
        this.shuffle(deck);
        return deck;
    }
    this.cardFromNumber = function(number){
        if(number >80 ||number<0){
            throw('wrong number: '+number+' in cardFromNumber');
        }
        var params = [0,0,0,0];
        for(var i=0;i<4;i++){
          this.rest = number % 3;
            number -= this.rest;
            number = number/3;
            params[i]=this.rest;
        }
        return params;
    }
    
    
}
function measureTime(){
    this.lastClick = 1;//end
    this.startTime = function(){
        this.time = new Date();
        this.startTime = this.time.getTime();
        this.lastClick = 0;
        console.log('in startTime');
    }
    this.endTime = function (){
        this.time = new Date();
        this.endTime = this.time.getTime();
        this.difference = this.endTime - this.startTime ;
        this.lastClick = 1;
    }
    this.stopStart = function(){
        if(this.lastClick == 1){
            this.start();
        }
        else{
            time.end();
        }
    }
}

function tryOnceMore3(){
    var cardt = new cards();
    var random = new randomizeCards();
    var card = random.fromRandom();
    var card2 = random.fromRandom();
    var card3 = random.findThirdCard(card,card2);
    cardt.cardParametrs('pat0',card);
    cardt.cardParametrs('pat1',card2);
    //var x = random.createSimilarCards([0,0,0,0]);
    var id;
    var x=[];
    var rand =randomOneOf(4);
    for(var i=0;i<4;i++){
        x[i]=random.fromRandom();
    }
    x[rand]=card3;
    //console.log(id);
    for(var i=0;i<4;i++){
        id= 'try'+i
        cardt.cardParametrs(id,x[i]);
        //console.log(id +'  '+ x[i])
        
    }
    //   shape   |  color  | number|  shading
    //------------------------------------
    //0| oval    |  red    | one   |  solid
    //1| diamond |  green  | two   |  striped
    //2| squiggle|  purple | three |  open
}

function cards(){
    this.squiggle = new squiggle();
    this.oval = new oval();
    this.diamond = new diamond();
    this.color = ['colorRed','colorGreen','colorPurple'];
    this.shading = ['solid','striped','open'];
    this.number = ['one','two','three'];
    this.shape = ['oval', 'diamond', 'squiggle'];
    this. cardCreator = 
    function(shapeType,colorType,numberType,shadingType) {
        if (shapeType == 'diamond'){
            this.card = this.diamond;
            //throw('err');
        }
        else if (shapeType == 'oval'){
            this.card = new oval();
            
        }
        else if(shapeType == 'squiggle'){
            this.card = this.squiggle;
            
        }
        else{throw('wrong shape: '+shapeType+ 'in function cardCreator')}
        this.card.color = colorType;
        this.card.shading = shadingType;
        this.card.number(numberType);
        this.card.pathsCreator();
        this.card.svgCreator(this.x,this.y);
        this.pushSvg(this.card.svg);
        //console.log(this.card.style);
    }
    this.localization = function(id){
        this.el = document.getElementById(id);
        if(this.el == null){throw('wrong id:'+ id+'in function localization')}
        
            this.y = this.el.clientWidth;
            this.x = this.el.clientHeight;
        //do porawy wpisane na twardo
    }
    this.clearField = function(id){
        this.localization(id);
        this.pushSvg("");
    }
    this.cardParametrs = function(id,nParam){
       this.localization(id);
       this.checkValues(nParam); this.cardCreator(this.shape[nParam[0]],this.color[nParam[1]],this.number[nParam[2]],this.shading[nParam[3]]);    
    }
    this.checkValues = function(values){
        for(var i = 0; i<4; i++){
            if(values[i]<0 ||values[i]>2){
                throw('u can onl use numbers from 0 to 2 in function cardParametrs')
            }
            if(values[i] == null){
                throw('value is null in function cardParametrs')
            }
            
        }
    }
    this.pushSvg = function(svg){
        this.el.innerHTML = svg;
    }
}
function diamond(){
    this.style = "stroke-width: 3;  transform: scale(1.2,1.2); transform-origin-x:400px;";
    this.one = function(){
        this.d = ['d="m 100,100 c -2.18523,-3.44062 -27.20487,-46.97704 -27.10492,-47.16498 0.0708,-0.13317 6.31653,-11.15013 13.87935,-24.48215 l 13.75059,-24.24003 1.05013,1.76146 c 5.41148,9.07705 26.64746,46.0736 26.57729,46.302 -0.12455,0.40544 -27.10013,47.96674 -27.40772,48.32323 -0.13542,0.15695 -0.47055,-0.0678 -0.74472,-0.49953 z"']
        this.viewBox = "-0 -20 90 160";
    }
    this.two = function(){
        this.d = ['d=" m 100,100 c -2.18523,-3.44062 -27.20487,-46.97704 -27.10492,-47.16498 0.0708,-0.13317 6.31653,-11.15013 13.87935,-24.48215 l 13.75059,-24.24003 1.05013,1.76146 c 5.41148,9.07705 26.64746,46.0736 26.57729,46.302 -0.12455,0.40544 -27.10013,47.96674 -27.40772,48.32323 -0.13542,0.15695 -0.47055,-0.0678 -0.74472,-0.49953 z m 65,0 c -2.18523,-3.44062 -27.20487,-46.97704 -27.10492,-47.16498 0.0708,-0.13317 6.31653,-11.15013 13.87935,-24.48215 l 13.75059,-24.24003 1.05013,1.76146 c 5.41148,9.07705 26.64746,46.0736 26.57729,46.302 -0.12455,0.40544 -27.10013,47.96674 -27.40772,48.32323 -0.13542,0.15695 -0.47055,-0.0678 -0.74472,-0.49953 z"'];
        this.viewBox = '-5 -20 180 160';
        
    }
    this.three = function(){
        this.d = ['d="m 100,100 c -2.18523,-3.44062 -27.20487,-46.97704 -27.10492,-47.16498 0.0708,-0.13317 6.31653,-11.15013 13.87935,-24.48215 l 13.75059,-24.24003 1.05013,1.76146 c 5.41148,9.07705 26.64746,46.0736 26.57729,46.302 -0.12455,0.40544 -27.10013,47.96674 -27.40772,48.32323 -0.13542,0.15695 -0.47055,-0.0678 -0.74472,-0.49953 z m 65,0 c -2.18523,-3.44062 -27.20487,-46.97704 -27.10492,-47.16498 0.0708,-0.13317 6.31653,-11.15013 13.87935,-24.48215 l 13.75059,-24.24003 1.05013,1.76146 c 5.41148,9.07705 26.64746,46.0736 26.57729,46.302 -0.12455,0.40544 -27.10013,47.96674 -27.40772,48.32323 -0.13542,0.15695 -0.47055,-0.0678 -0.74472,-0.49953 z m 65,0 c -2.18523,-3.44062 -27.20487,-46.97704 -27.10492,-47.16498 0.0708,-0.13317 6.31653,-11.15013 13.87935,-24.48215 l 13.75059,-24.24003 1.05013,1.76146 c 5.41148,9.07705 26.64746,46.0736 26.57729,46.302 -0.12455,0.40544 -27.10013,47.96674 -27.40772,48.32323 -0.13542,0.15695 -0.47055,-0.0678 -0.74472,-0.49953 z"'];
        this.viewBox = '-15 0 270 130';
        
    }
    this.pathsCreator = function(){
            this.borderStyle = "open " + this.color;
    this.class = this.color + ' ' +this.shading;
        this.paths = "";
        for (var i = 0; i<this.d.length; i++){
            this.paths+='<path class="' +this.class+'" style="'+this.style+'" ' +this.d[i]+'/>'
            
        }
        for (var i = 0; i<this.d.length; i++){
            this.paths+='<path class="' +this.borderStyle+'" style="'+this.style+'" ' +this.d[i]+'/>'
            
        }
        
    }
    svgCreator.call(this);
    
}
function svgCreator(){
    this.number = function(number){
        if (number == 'one'){
            this.one();
        }
        else if(number == 'two'){
            this.two();
        }
        else if(number == 'three'){
            this.three();
        }
        else{throw('wrong number: '+number+'in function svgCreator')}
        
    }
    this.svgCreator = function(x,y){
        this.svg = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="'+this.viewBox +'"width="'+y +'"height="'+x+ '"> <defs> <pattern id="pattern-stripe" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(90)"> <rect width="2" height="4" transform="translate(0,0)" fill="white"></rect></pattern> <mask id="mask-stripe"> <rect x="0" y="0" width="1000px" height="1000px" fill="url(#pattern-stripe)" /> </mask> </defs>'+this.paths+'</svg>';
    }
}
function squiggle(){
   // this.viewBox //liczba
    //this.color=//kolor i wypełnienie
    //this.shading
    //this.borderStyle = "open" + this.color;
    //this.class = this.color +this.shading;
    this.style = "stroke-width:5; transform: scale(0.8,0.8); transform-origin-x:-300px;";
    this.one = function(){
        this.d = ['d="m 100,100 c 0,0 0.79623,-8.72627 2.14286,-12.85714 1.25308,-3.84391 5.44008,-10.84056 5.44008,-10.84056 0,0 2.27418,-4.62691 2.81753,-7.12119 0.56873,-2.61078 0.51917,-5.33498 0.41842,-8.00508 -0.14531,-3.85134 -0.81746,-8.32464 -1.47189,-11.46818 -0.65443,-3.14354 -1.19607,-5.02541 -2.14998,-7.39725 -0.95392,-2.37185 -2.29605,-4.85013 -3.53893,-6.76591 -1.24288,-1.91578 -2.56998,-3.10788 -3.76269,-4.7583 -1.19271,-1.65042 -3.0932,-2.61784 -3.38388,-5.13711 -0.29069,-2.51928 0.61023,-5.77553 3.13134,-8.50642 2.52111,-2.7309 7.05963,-4.95351 12.01659,-5.54841 4.95696,-0.59491 12.02967,1.66242 16.4069,3.218 4.37722,1.55557 7.0057,3.14648 9.84464,5.24139 2.83894,2.0949 4.71581,4.04919 7.1051,7.05992 2.38929,3.01072 5.16697,7.09208 6.85256,11.10053 1.38286,3.28853 2.15203,6.84557 2.57583,10.38777 0.61135,5.1098 0.74442,11.15825 -0.0758,15.43854 -0.82026,4.2803 -2.70925,6.62643 -3.91062,9.97091 -1.20136,3.34449 -2.45898,6.65012 -3.29723,10.08666 -0.54317,2.22683 -0.97161,4.49795 -1.1129,6.78571 -0.14472,2.34342 -0.0521,4.71341 0.27606,7.03825 0.29686,2.10295 0.85879,4.16938 1.52235,6.18686 0.58393,1.77539 1.29081,3.51888 2.15369,5.17672 0.69308,1.3316 1.60955,2.53445 2.41334,3.80231 1.03379,1.63064 1.86258,3.14855 3.09885,4.89353 1.23627,1.74498 3.74869,3.56754 4.36154,5.52488 0.35174,1.12342 1.07045,2.73795 0.97951,4.15945 -0.13186,2.06114 -0.83088,4.23471 -2.17721,5.80094 -2.39509,2.7863 -6.1739,4.29289 -9.62119,5.37881 -3.73898,1.1778 -7.76266,1.43248 -11.65944,1.53689 -3.51588,0.0942 -7.1111,-0.13876 -10.5484,-0.88389 -3.9285,-0.8516 -7.60297,-2.73519 -11.0931,-4.72951 -2.99114,-1.70918 -5.90183,-3.21081 -8.31889,-6.1327 -2.3035,-2.7846 -4.12807,-6.67078 -5.29215,-10.06499 -1.16408,-3.39422 -1.41677,-6.6341 -1.78571,-10 -0.31158,-2.8426 -0.35715,-8.57143 -0.35715,-8.57143 z"'];
        this.viewBox = "-0 -20 90 160";
        
    }
    this.two = function(){
        this.d = ['d="m 100,100 c 0,0 0.79623,-8.72627 2.14286,-12.85714 1.25308,-3.84391 5.44008,-10.84056 5.44008,-10.84056 0,0 2.27418,-4.62691 2.81753,-7.12119 0.56873,-2.61078 0.51917,-5.33498 0.41842,-8.00508 -0.14531,-3.85134 -0.81746,-8.32464 -1.47189,-11.46818 -0.65443,-3.14354 -1.19607,-5.02541 -2.14998,-7.39725 -0.95392,-2.37185 -2.29605,-4.85013 -3.53893,-6.76591 -1.24288,-1.91578 -2.56998,-3.10788 -3.76269,-4.7583 -1.19271,-1.65042 -3.0932,-2.61784 -3.38388,-5.13711 -0.29069,-2.51928 0.61023,-5.77553 3.13134,-8.50642 2.52111,-2.7309 7.05963,-4.95351 12.01659,-5.54841 4.95696,-0.59491 12.02967,1.66242 16.4069,3.218 4.37722,1.55557 7.0057,3.14648 9.84464,5.24139 2.83894,2.0949 4.71581,4.04919 7.1051,7.05992 2.38929,3.01072 5.16697,7.09208 6.85256,11.10053 1.38286,3.28853 2.15203,6.84557 2.57583,10.38777 0.61135,5.1098 0.74442,11.15825 -0.0758,15.43854 -0.82026,4.2803 -2.70925,6.62643 -3.91062,9.97091 -1.20136,3.34449 -2.45898,6.65012 -3.29723,10.08666 -0.54317,2.22683 -0.97161,4.49795 -1.1129,6.78571 -0.14472,2.34342 -0.0521,4.71341 0.27606,7.03825 0.29686,2.10295 0.85879,4.16938 1.52235,6.18686 0.58393,1.77539 1.29081,3.51888 2.15369,5.17672 0.69308,1.3316 1.60955,2.53445 2.41334,3.80231 1.03379,1.63064 1.86258,3.14855 3.09885,4.89353 1.23627,1.74498 3.74869,3.56754 4.36154,5.52488 0.35174,1.12342 1.07045,2.73795 0.97951,4.15945 -0.13186,2.06114 -0.83088,4.23471 -2.17721,5.80094 -2.39509,2.7863 -6.1739,4.29289 -9.62119,5.37881 -3.73898,1.1778 -7.76266,1.43248 -11.65944,1.53689 -3.51588,0.0942 -7.1111,-0.13876 -10.5484,-0.88389 -3.9285,-0.8516 -7.60297,-2.73519 -11.0931,-4.72951 -2.99114,-1.70918 -5.90183,-3.21081 -8.31889,-6.1327 -2.3035,-2.7846 -4.12807,-6.67078 -5.29215,-10.06499 -1.16408,-3.39422 -1.41677,-6.6341 -1.78571,-10 -0.31158,-2.8426 -0.35715,-8.57143 -0.35715,-8.57143 z m 90,0 c 0,0 0.79623,-8.72627 2.14286,-12.85714 1.25308,-3.84391 5.44008,-10.84056 5.44008,-10.84056 0,0 2.27418,-4.62691 2.81753,-7.12119 0.56873,-2.61078 0.51917,-5.33498 0.41842,-8.00508 -0.14531,-3.85134 -0.81746,-8.32464 -1.47189,-11.46818 -0.65443,-3.14354 -1.19607,-5.02541 -2.14998,-7.39725 -0.95392,-2.37185 -2.29605,-4.85013 -3.53893,-6.76591 -1.24288,-1.91578 -2.56998,-3.10788 -3.76269,-4.7583 -1.19271,-1.65042 -3.0932,-2.61784 -3.38388,-5.13711 -0.29069,-2.51928 0.61023,-5.77553 3.13134,-8.50642 2.52111,-2.7309 7.05963,-4.95351 12.01659,-5.54841 4.95696,-0.59491 12.02967,1.66242 16.4069,3.218 4.37722,1.55557 7.0057,3.14648 9.84464,5.24139 2.83894,2.0949 4.71581,4.04919 7.1051,7.05992 2.38929,3.01072 5.16697,7.09208 6.85256,11.10053 1.38286,3.28853 2.15203,6.84557 2.57583,10.38777 0.61135,5.1098 0.74442,11.15825 -0.0758,15.43854 -0.82026,4.2803 -2.70925,6.62643 -3.91062,9.97091 -1.20136,3.34449 -2.45898,6.65012 -3.29723,10.08666 -0.54317,2.22683 -0.97161,4.49795 -1.1129,6.78571 -0.14472,2.34342 -0.0521,4.71341 0.27606,7.03825 0.29686,2.10295 0.85879,4.16938 1.52235,6.18686 0.58393,1.77539 1.29081,3.51888 2.15369,5.17672 0.69308,1.3316 1.60955,2.53445 2.41334,3.80231 1.03379,1.63064 1.86258,3.14855 3.09885,4.89353 1.23627,1.74498 3.74869,3.56754 4.36154,5.52488 0.35174,1.12342 1.07045,2.73795 0.97951,4.15945 -0.13186,2.06114 -0.83088,4.23471 -2.17721,5.80094 -2.39509,2.7863 -6.1739,4.29289 -9.62119,5.37881 -3.73898,1.1778 -7.76266,1.43248 -11.65944,1.53689 -3.51588,0.0942 -7.1111,-0.13876 -10.5484,-0.88389 -3.9285,-0.8516 -7.60297,-2.73519 -11.0931,-4.72951 -2.99114,-1.70918 -5.90183,-3.21081 -8.31889,-6.1327 -2.3035,-2.7846 -4.12807,-6.67078 -5.29215,-10.06499 -1.16408,-3.39422 -1.41677,-6.6341 -1.78571,-10 -0.31158,-2.8426 -0.35715,-8.57143 -0.35715,-8.57143 z"'];
        this.viewBox = '-10 -20 180 160';
    }
    this.three = function(){
        this.d = ['d="m 100,100 c 0,0 0.79623,-8.72627 2.14286,-12.85714 1.25308,-3.84391 5.44008,-10.84056 5.44008,-10.84056 0,0 2.27418,-4.62691 2.81753,-7.12119 0.56873,-2.61078 0.51917,-5.33498 0.41842,-8.00508 -0.14531,-3.85134 -0.81746,-8.32464 -1.47189,-11.46818 -0.65443,-3.14354 -1.19607,-5.02541 -2.14998,-7.39725 -0.95392,-2.37185 -2.29605,-4.85013 -3.53893,-6.76591 -1.24288,-1.91578 -2.56998,-3.10788 -3.76269,-4.7583 -1.19271,-1.65042 -3.0932,-2.61784 -3.38388,-5.13711 -0.29069,-2.51928 0.61023,-5.77553 3.13134,-8.50642 2.52111,-2.7309 7.05963,-4.95351 12.01659,-5.54841 4.95696,-0.59491 12.02967,1.66242 16.4069,3.218 4.37722,1.55557 7.0057,3.14648 9.84464,5.24139 2.83894,2.0949 4.71581,4.04919 7.1051,7.05992 2.38929,3.01072 5.16697,7.09208 6.85256,11.10053 1.38286,3.28853 2.15203,6.84557 2.57583,10.38777 0.61135,5.1098 0.74442,11.15825 -0.0758,15.43854 -0.82026,4.2803 -2.70925,6.62643 -3.91062,9.97091 -1.20136,3.34449 -2.45898,6.65012 -3.29723,10.08666 -0.54317,2.22683 -0.97161,4.49795 -1.1129,6.78571 -0.14472,2.34342 -0.0521,4.71341 0.27606,7.03825 0.29686,2.10295 0.85879,4.16938 1.52235,6.18686 0.58393,1.77539 1.29081,3.51888 2.15369,5.17672 0.69308,1.3316 1.60955,2.53445 2.41334,3.80231 1.03379,1.63064 1.86258,3.14855 3.09885,4.89353 1.23627,1.74498 3.74869,3.56754 4.36154,5.52488 0.35174,1.12342 1.07045,2.73795 0.97951,4.15945 -0.13186,2.06114 -0.83088,4.23471 -2.17721,5.80094 -2.39509,2.7863 -6.1739,4.29289 -9.62119,5.37881 -3.73898,1.1778 -7.76266,1.43248 -11.65944,1.53689 -3.51588,0.0942 -7.1111,-0.13876 -10.5484,-0.88389 -3.9285,-0.8516 -7.60297,-2.73519 -11.0931,-4.72951 -2.99114,-1.70918 -5.90183,-3.21081 -8.31889,-6.1327 -2.3035,-2.7846 -4.12807,-6.67078 -5.29215,-10.06499 -1.16408,-3.39422 -1.41677,-6.6341 -1.78571,-10 -0.31158,-2.8426 -0.35715,-8.57143 -0.35715,-8.57143 z m 90,0 c 0,0 0.79623,-8.72627 2.14286,-12.85714 1.25308,-3.84391 5.44008,-10.84056 5.44008,-10.84056 0,0 2.27418,-4.62691 2.81753,-7.12119 0.56873,-2.61078 0.51917,-5.33498 0.41842,-8.00508 -0.14531,-3.85134 -0.81746,-8.32464 -1.47189,-11.46818 -0.65443,-3.14354 -1.19607,-5.02541 -2.14998,-7.39725 -0.95392,-2.37185 -2.29605,-4.85013 -3.53893,-6.76591 -1.24288,-1.91578 -2.56998,-3.10788 -3.76269,-4.7583 -1.19271,-1.65042 -3.0932,-2.61784 -3.38388,-5.13711 -0.29069,-2.51928 0.61023,-5.77553 3.13134,-8.50642 2.52111,-2.7309 7.05963,-4.95351 12.01659,-5.54841 4.95696,-0.59491 12.02967,1.66242 16.4069,3.218 4.37722,1.55557 7.0057,3.14648 9.84464,5.24139 2.83894,2.0949 4.71581,4.04919 7.1051,7.05992 2.38929,3.01072 5.16697,7.09208 6.85256,11.10053 1.38286,3.28853 2.15203,6.84557 2.57583,10.38777 0.61135,5.1098 0.74442,11.15825 -0.0758,15.43854 -0.82026,4.2803 -2.70925,6.62643 -3.91062,9.97091 -1.20136,3.34449 -2.45898,6.65012 -3.29723,10.08666 -0.54317,2.22683 -0.97161,4.49795 -1.1129,6.78571 -0.14472,2.34342 -0.0521,4.71341 0.27606,7.03825 0.29686,2.10295 0.85879,4.16938 1.52235,6.18686 0.58393,1.77539 1.29081,3.51888 2.15369,5.17672 0.69308,1.3316 1.60955,2.53445 2.41334,3.80231 1.03379,1.63064 1.86258,3.14855 3.09885,4.89353 1.23627,1.74498 3.74869,3.56754 4.36154,5.52488 0.35174,1.12342 1.07045,2.73795 0.97951,4.15945 -0.13186,2.06114 -0.83088,4.23471 -2.17721,5.80094 -2.39509,2.7863 -6.1739,4.29289 -9.62119,5.37881 -3.73898,1.1778 -7.76266,1.43248 -11.65944,1.53689 -3.51588,0.0942 -7.1111,-0.13876 -10.5484,-0.88389 -3.9285,-0.8516 -7.60297,-2.73519 -11.0931,-4.72951 -2.99114,-1.70918 -5.90183,-3.21081 -8.31889,-6.1327 -2.3035,-2.7846 -4.12807,-6.67078 -5.29215,-10.06499 -1.16408,-3.39422 -1.41677,-6.6341 -1.78571,-10 -0.31158,-2.8426 -0.35715,-8.57143 -0.35715,-8.57143 z m 90,0 c 0,0 0.79623,-8.72627 2.14286,-12.85714 1.25308,-3.84391 5.44008,-10.84056 5.44008,-10.84056 0,0 2.27418,-4.62691 2.81753,-7.12119 0.56873,-2.61078 0.51917,-5.33498 0.41842,-8.00508 -0.14531,-3.85134 -0.81746,-8.32464 -1.47189,-11.46818 -0.65443,-3.14354 -1.19607,-5.02541 -2.14998,-7.39725 -0.95392,-2.37185 -2.29605,-4.85013 -3.53893,-6.76591 -1.24288,-1.91578 -2.56998,-3.10788 -3.76269,-4.7583 -1.19271,-1.65042 -3.0932,-2.61784 -3.38388,-5.13711 -0.29069,-2.51928 0.61023,-5.77553 3.13134,-8.50642 2.52111,-2.7309 7.05963,-4.95351 12.01659,-5.54841 4.95696,-0.59491 12.02967,1.66242 16.4069,3.218 4.37722,1.55557 7.0057,3.14648 9.84464,5.24139 2.83894,2.0949 4.71581,4.04919 7.1051,7.05992 2.38929,3.01072 5.16697,7.09208 6.85256,11.10053 1.38286,3.28853 2.15203,6.84557 2.57583,10.38777 0.61135,5.1098 0.74442,11.15825 -0.0758,15.43854 -0.82026,4.2803 -2.70925,6.62643 -3.91062,9.97091 -1.20136,3.34449 -2.45898,6.65012 -3.29723,10.08666 -0.54317,2.22683 -0.97161,4.49795 -1.1129,6.78571 -0.14472,2.34342 -0.0521,4.71341 0.27606,7.03825 0.29686,2.10295 0.85879,4.16938 1.52235,6.18686 0.58393,1.77539 1.29081,3.51888 2.15369,5.17672 0.69308,1.3316 1.60955,2.53445 2.41334,3.80231 1.03379,1.63064 1.86258,3.14855 3.09885,4.89353 1.23627,1.74498 3.74869,3.56754 4.36154,5.52488 0.35174,1.12342 1.07045,2.73795 0.97951,4.15945 -0.13186,2.06114 -0.83088,4.23471 -2.17721,5.80094 -2.39509,2.7863 -6.1739,4.29289 -9.62119,5.37881 -3.73898,1.1778 -7.76266,1.43248 -11.65944,1.53689 -3.51588,0.0942 -7.1111,-0.13876 -10.5484,-0.88389 -3.9285,-0.8516 -7.60297,-2.73519 -11.0931,-4.72951 -2.99114,-1.70918 -5.90183,-3.21081 -8.31889,-6.1327 -2.3035,-2.7846 -4.12807,-6.67078 -5.29215,-10.06499 -1.16408,-3.39422 -1.41677,-6.6341 -1.78571,-10 -0.31158,-2.8426 -0.35715,-8.57143 -0.35715,-8.57143 z"'];
        this.viewBox = '-20 0 270 130';
    }
     this.pathsCreator = function(){
        this.borderStyle = "open " + this.color;
        this.class = this.color + ' ' +this.shading;
        this.paths = "";
        for (var i = 0; i<this.d.length; i++){
            this.paths+='<path class="' +this.class+'" style="'+this.style+'" ' +this.d[i]+'/>'
            
        }
        for (var i = 0; i<this.d.length; i++){
            this.paths+='<path class="' +this.borderStyle+'" style="'+this.style+'" ' +this.d[i]+'/>'
            
        }
        
    }
    svgCreator.call(this);
}
function oval(){
    this.style = "stroke-width:3;";
    this.one = function(){
        this.d = ['rx="26" x="15" y="10" height="108" width="52" style="stroke-width:3;"'];
        this.viewBox = "-0 -20 90 160";
    }
    this.two = function(){
        this.d = ['rx="26" x="15" y="10" height="108" width="52" style="stroke-width:3;"', 'rx="26" x="90" y="10" height="108" width="52" style="stroke-width:3;"'];
        this.viewBox = '-10 -20 180 160';
        
    }
    this.three = function(){
        this.d = ['rx="26" x="15" y="10" height="108" width="52" style="stroke-width:3;"', 'rx="26" x="165" y="10" height="108" width="52" style="stroke-width:3;"', 'rx="26" x="90" y="10" height="108" width="52" style="stroke-width:3;"'];
        this.viewBox = '-20 0 270 130';     
    }
    this.pathsCreator = function(){
        this.borderStyle = "open " + this.color;
        this.class = this.color + ' ' +this.shading;
        this.paths = "";
        for (var i = 0; i<this.d.length; i++){
            this.paths+='<rect class="' +this.class+'" style="'+this.style+'" ' +this.d[i]+'/>'
        }
        for (var i = 0; i<this.d.length; i++){
            this.paths+='<rect class="' +this.borderStyle+'" style="'+this.style+'" ' +this.d[i]+'/>'
            
        }
    }
    svgCreator.call(this);
}
