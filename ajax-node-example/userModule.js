var userMod=function(){
        var self=this;
        self.addKeyValue=function(obj,key,value){
           obj[key]=value;
           return obj;
        }

        self.test_addKeyValue = function(){
            var obj = {};
            var key = 'a';
            var value = 1623;
            var newObj=addKeyValue(obj,key,value);
            //console.log(newObj);
            if(newObj.a!=123){throw 'cant add key-value';}
            
        }

      
        self.testModule=function(){
            return 'ji';
        }
};
module.exports=userMod;