import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()
export async function GET(req: NextRequest, res : NextResponse) {

    const work = await prisma.alumniUser.findMany({
        include : {
            internships : true,
            projects : true
        }
    })


    return NextResponse.json(work)
}