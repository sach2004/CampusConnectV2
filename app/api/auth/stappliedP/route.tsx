import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()
export async function GET(req: NextRequest, res : NextResponse) {

    const work = await prisma.appliedProject.findMany({
        include : {
            student : true,
            project : true
        }
    })

    console.log(JSON.stringify(work))
    return NextResponse.json(work)
}