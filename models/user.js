const mongoose = require('mongoose');
const usersSchema=mongoose.Schema({
    userName:{
        type:String,
        
       
    },
    password:{
        type:String,
        
        
    },
    email:{
         
        type:String,
        
        
    },
},{
strict:false,
versionKey :false,
    
})

const user=mongoose.model('users',usersSchema)

module.exports=user;