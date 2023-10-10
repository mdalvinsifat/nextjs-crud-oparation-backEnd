import { User } from "@/app/model/model";
import { NextResponse } from "next/server";



export async function DELETE(request,{params}){
    const {id} = params;
    try {
        const userDelete = await User.findByIdAndDelete({
            _id:id,
        })
        return NextResponse.json({
            success:true,
            message:"delete",
            userDelete
        })
    } catch (error) {
        console.log(error)
    }
}




export async function GET(requst,{params}){
    const {id} = params;
    try {
        const GetUser = await User.findById({
            _id:id,
        })

        return NextResponse.json({
            success:true,
            message:"User Get It",
            GetUser
        })
    } catch (error) {
        console.log(error)
    }
}



export async function PUT(request,{params}){
    const {id} = params;
    const {name , email, password, title, img} = await request.json()
try {
    const UserId = await User.findByIdAndUpdate(id)
    UserId.name = name,
    UserId.title = title,
    UserId.email = email,
    UserId.password = password,
    UserId.img = img
const userUpdate = await UserId.save()
    return NextResponse.json({
        success:true,
        message:"user Successfully Update",
        userUpdate
    })
} catch (error) {
    console.log("error", error)
}
}