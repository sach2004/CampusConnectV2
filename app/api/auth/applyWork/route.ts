import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req:NextRequest, res : NextResponse) {

    const applyData = await req.json()

    console.log(applyData)

    const userData = await prisma.studentUser.findUnique({
        where : {
            email : applyData.sessionEmail
        }
    })

    console.log(userData)

    try {
        await prisma.appliedInternship.create({
            data : {
                studentId : userData!.id,
                internshipId : applyData.workId,
                
            }
        })

        return NextResponse.json({message : "data posted successfully"})
    } catch (error) {
        return NextResponse.json({message : "Internal server error"})
        console.log(error)
    }

    

}