
const mongoose=require('mongoose');
const validator=require('validator');
const User = mongoose.model('User', {
    name: {
        type: String,
        required:true,
        trim:true
        
    },
    email:{
          type:String,
          required:true,
          trim:true,
          validate(value){
            if(!validator.isEmail(value)){
              throw new Error('Email is invalid')  
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:7,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error("Password is invalid and cannot contain 'password'")
            }
        }
    },
    age: {
        // default:0,
        required:true,
        type: Number,
        // validate(value){
        //     if(value<0){
        //         throw new Error('Age Must be Positive Number')
        //     }
        // }
    }
});

module.exports=User;