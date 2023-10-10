import mongoose from "mongoose"




export const Connection = async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/' )

        
        console.log("Mongoose Connected")

    } catch (error) {
        console.log("Not exit ", error)
    }
}