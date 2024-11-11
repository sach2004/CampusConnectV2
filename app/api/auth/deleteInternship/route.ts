import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const { id, type } = await req.json();

        let result;

        
        if (type === 'internship') {
            result = await prisma.$transaction(async (tx) => {
                
                await tx.appliedInternship.deleteMany({
                    where: {
                        internshipId: id
                    }
                });

                
                return await tx.internship.delete({
                    where: {
                        id: id
                    }
                });
            });

            return NextResponse.json({
                message: "Internship and related applications deleted successfully",
                data: result
            });
        } 
        else if (type === 'project') {
            result = await prisma.$transaction(async (tx) => {
                
                await tx.appliedProject.deleteMany({
                    where: {
                        projectId: id
                    }
                });

                
                return await tx.project.delete({
                    where: {
                        id: id
                    }
                });
            });

            return NextResponse.json({
                message: "Project and related applications deleted successfully",
                data: result
            });
        }
        else {
            return NextResponse.json(
                { error: "Invalid type specified" },
                { status: 400 }
            );
        }
    } catch (error) {
        console.error("Error deleting the item:", error);
        return NextResponse.json(
            { 
                error: "Failed to delete item",
                details: error instanceof Error ? error.message : "Unknown error"
            },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}