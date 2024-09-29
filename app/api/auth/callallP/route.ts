import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()
export async function GET(req: NextRequest, res : NextResponse) {

    const pro = await prisma.appliedProject.findMany({
        include : {
            student : true,
            project : true
        }
    })


    return NextResponse.json(pro)
}