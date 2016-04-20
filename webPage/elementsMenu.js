var settings={
    elements:[
        {
            listId:0,
            type:'circle',
            id:'circle1'
        },
        {
            listId:1,
            type:'circle',
            id:'circle2'
        },
         {
            listId:2,
            type:'circle',
            id:'circle3'
        },
        {
            listId:3,
            type:'line',
            id:'line1'
        },
         {
            listId:4,
            type:'line',
            id:'line2'
        },
        {
            listId:5,
            type:'line',
            id:'line3'
        }
    ]
}
function elementsJson(){
    this.elementsObject={
        elements:[
            {
                listId:0,
                type:'circle',
                id:'circle1'
            },
            {
                listId:1,
                type:'circle',
                id:'circle2'
            },
             {
                listId:2,
                type:'circle',
                id:'circle3'
            },
            {
                listId:3,
                type:'line',
                id:'line1'
            },
             {
                listId:4,
                type:'line',
                id:'line2'
            },
            {
                listId:5,
                type:'line',
                id:'line3'
            }
        ]
    }

}
var sort= new sortElements();
var elem=new elementsUl();
var addli=function(){
    var el=document.getElementById('elementsList');
    el.innerHTML="";
    el.innerHTML=elem.createUlList();
}
var sortFn=function(type){
    sort.sortByType(type);
}
function sortElements(){
    elementsJson.call(this);
    this.test=function(){
    console.log(this.elementsObject);
    }
    this.sortByType=function(type){
        var elements=this.elementsObject.elements;
        var numberOfElements=this.elementsObject.elements.length;
        for(var i=0;i<numberOfElements;i++){
            if(elements[i].type==type||type=='all'){
                //j.push(elements[i].listId);
                this.elementDisplay('elementsLiId_'+elements[i].listId,'block');
            }
            else{
                this.elementDisplay('elementsLiId_'+elements[i].listId,'none');
            }
        }
        //this.changeDisplay(j);
    }
    this.elementDisplay=function(id,style){
        var el=document.getElementById(id);
        el.style.display=style;
        return;
        
    }
}
function elementsUl(){
    elementsJson.call(this)
    //console.log(this.json);
    this.createUlList=function(){
        var text=''
        var idBegin='elementsLiId_';
        var numberOfElements=this.elementsObject.elements.length;
        //console.log(elementsObject['elements'][0]);
        for(var i=0;i<numberOfElements;i++){
            var obj=this.elementsObject['elements'][i];
            text+='<li id="'+idBegin+obj.listId+'">'+obj['id']+'</li>';
    //        /console.log(objElement.listId);
        }
        return '<ul>'+text+'</ul>';
    }

    this.addElement=function(type,id){
        //console.log(this.json);
        if(type===undefined||id===undefined){return}
        var number=this.elementsObject.elements.length;
        this.elementsObject.elements[number]={listId:number,type:type,id:id};
        console.log(this.elementsObject.elements);
    }
    this.addSetToLi=function(id,obj){
        
    }
}
    var test5=function(){

        
    }
