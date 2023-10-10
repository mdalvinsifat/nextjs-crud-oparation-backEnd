const { Schema, default: mongoose } = require("mongoose");


const UserSchema = new Schema({
    name:String,
    img:String,
    title:String,
    email:String,
    password:String
})

export const User = mongoose.models.Users || mongoose.model("auth", UserSchema)


