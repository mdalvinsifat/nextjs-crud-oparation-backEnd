
import bcryptjs from 'bcryptjs'
import JWT from 'jsonwebtoken'
import { Connection } from "@/app/helper/db";
import { Auth } from "../api/regModel/model";
import { NextResponse } from 'next/server';
Connection()

export const POST = async (request) => {
  try {
    const body = await request.json()
    const {email , password} = body 

    const users = await Auth.findOne({email})
    if(!users){
        return NextResponse.json({
            message:"already exit"
        },{status: 400})
    }
    

    const validpassword = await bcryptjs.compare(password, users.password)
    if(!validpassword){
        return NextResponse.json({
            success:false,
            message:"user not exit"
        })
    }


    // const tokenData ={
    //     email: users.email ,
    //     id :users._id
    // }


    const token = await JWT.sign({
        email: users.email ,
            id :users._id
    },process.env.JWT_SECRETKEY,{expiresIn:"1h"})


    const respose = NextResponse.json({
        success:true,
        message:"user Login Successfully",  
        token
    })

    respose.cookies.set("token", token,{
        httpOnly:true,
    })

   return respose
  } catch (error) {
    console.log(error)
  }
}