import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient()

export async function POST(req:NextRequest, res : NextResponse) {
    
    const applyData = await req.json()
    
    const stData = await prisma.studentUser.findUnique({
        where : {
            email : applyData.sessionEmail
        }
    })

    console.log(stData)

    try {
        await prisma.appliedProject.create({
            data : {
                studentId : stData!.id,
                projectId : applyData.projId
            }
        })
        
        return NextResponse.json({message : "Data Posted"})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message : "Internal Server Error"})
    }

   
}