import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function POST(req:NextRequest, res : NextResponse) {
    const formData = await req.json()

   const alumniUser =  await prisma.alumniUser.findUnique({
        where :{
            email : formData.sessionEmail
        }
    })
    
    const sessionId = alumniUser?.id 


    try {

        await prisma.internship.create({
            data : {
                title : formData.title,
                description: formData.desc,
                minSal: formData.minSal,
                maxSal: formData.maxSal,
                alumni : {connect : {id : sessionId}}
            }
        })

        return NextResponse.json({message: "form data received sucessfully"})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({message : "Internal Server Error"})
    }
    
    
}