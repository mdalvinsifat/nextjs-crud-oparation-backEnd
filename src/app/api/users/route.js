import { User } from "@/app/model/model"
import { NextResponse } from "next/server"





export async function GET (request){
    let Users= []
    try {
        Users = await User.find()
        return NextResponse.json({
            success:true,
            message:"user Create",
            Users
        })
    } catch (error) {
        console.log("error")
    }

  
}



export async function POST (request){
 
    const {name,email,title,password,img}= await request.json()
    const user = new User({
        name,
        password,
        title,
        img,
        email,
    })
try {
    const createuser = await user.save()
    const respose = NextResponse.json(user,{
        status:201,
    })
    return respose
} catch (error) {
    return NextResponse.json({
        success:false,
        message:"user Not create "
    })
}
}