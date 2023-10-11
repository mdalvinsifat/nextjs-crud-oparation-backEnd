import { NextRequest, NextResponse } from "next/server"
import bcryptjs from 'bcryptjs'
import { Connection } from "@/app/helper/db";
import { Auth } from "../api/regModel/model";
Connection()
export const POST = async (request) => {
    try {
        const body = await request.json()
        const {email ,password} = body
        

        const user = await Auth.findOne({email})
        if(user){
            return NextResponse.json({
                message:"already exit"
            },{status: 400})
        }

        //hash password 
        const salt = await bcryptjs.genSalt(12)
        const hashpassword = await bcryptjs.hash(password, salt)

      const newUser = new Auth({
            email,
            password:hashpassword
        })

       const savedUSer =  await newUser.save()
       return NextResponse.json({
        message:"Successfully",
        success:true,
        savedUSer
    },{status: 201})

    } catch (error) {
        console.log("Error", error)
    }
}