function editElements(){
    //elementsJson.call(this);
    this.elementsList=['circle','line'];
    this.test=function(){
    console.log(this.elementsObject);
    }
    this.displayBySelect=function(type){
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
    this.allDisplayNone=function(){
        for(var i=0;i<this.elementsList.length;i++){
            this.elementDisplay(this.elementsList[i]+'Form','none');    
            
        }
        
    }
    this.tests=function(){
        var a=document.getElementById('specieSelect').value;
        console.log(document.getElementById('specieSelect').value);
        this.allDisplayNone();
        this.elementDisplay(a+'Form','block');
    }
}