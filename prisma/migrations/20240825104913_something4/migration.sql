/*
  Warnings:

  - You are about to drop the `Alumni` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QuestionPaper` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Alumni" DROP CONSTRAINT "Alumni_userId_fkey";

-- DropForeignKey
ALTER TABLE "Internship" DROP CONSTRAINT "Internship_alumniId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_alumniId_fkey";

-- DropForeignKey
ALTER TABLE "QuestionPaper" DROP CONSTRAINT "QuestionPaper_studentId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_userId_fkey";

-- DropTable
DROP TABLE "Alumni";

-- DropTable
DROP TABLE "QuestionPaper";

-- DropTable
DROP TABLE "Student";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "StudentUser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "role" "Role",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StudentUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlumniUser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "role" "Role",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AlumniUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentUser_email_key" ON "StudentUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AlumniUser_email_key" ON "AlumniUser"("email");

-- AddForeignKey
ALTER TABLE "Internship" ADD CONSTRAINT "Internship_alumniId_fkey" FOREIGN KEY ("alumniId") REFERENCES "AlumniUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_alumniId_fkey" FOREIGN KEY ("alumniId") REFERENCES "AlumniUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
