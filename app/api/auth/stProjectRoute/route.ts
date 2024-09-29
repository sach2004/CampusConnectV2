import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient()
export async function GET(req:NextRequest, res: NextResponse) {
    
    const data = await prisma.project.findMany({
        include : {
            alumni : true,
            appliedProjects : true
        }
    })

    return NextResponse.json(data)
    
}