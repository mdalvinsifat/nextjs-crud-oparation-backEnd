const { default: mongoose, Schema } = require("mongoose");



const AuthSchema = new Schema({

    email:{
        type:String 
    },
    password:{
        type:String
    }

})



export const Auth = mongoose.models.auth || mongoose.model("auth",AuthSchema )
