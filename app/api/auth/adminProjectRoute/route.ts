import { PrismaClient } from "@prisma/client";
import { connect } from "http2";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient() 

export async function POST(req : NextRequest, res : NextResponse){
    const formData = await req.json()

    console.log(formData.sessionEmail)

    const session = await prisma.alumniUser.findUnique({
        where  : {
            email : formData.sessionEmail
        }
    })

    console.log(session)
    console.log(session?.id)

    const sessionId = session?.id

    try {
        await prisma.project.create({
            data : {
                title : formData.title,
                description : formData.desc,
                alumni : { connect : {id : sessionId} }
            }
        })

        return NextResponse.json({message : "inserted data Successfully"})
        
    } catch (error) {
        return NextResponse.json({message : "Internal Server Error"})
        console.log(error)
    }

    
}