const mongoose=require('mongoose');
const validator=require('validator');
const Tasks=mongoose.model('Tasks',{

    Description:{
        type:String,
        required:true,
        maxLength:100,
        trim:true,
        validate(value){
            if(value.length>100){
                throw new Error(' it should be under the 100 chareceters only')
               
            }
        
        }
    },Completed:{
        default:false,
        type:Boolean
      
    }
});
module.exports=Tasks;