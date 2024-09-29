-- CreateTable
CREATE TABLE "AppliedInternship" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "internshipId" INTEGER NOT NULL,
    "appliedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AppliedInternship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppliedProject" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,
    "appliedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AppliedProject_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AppliedInternship_studentId_internshipId_key" ON "AppliedInternship"("studentId", "internshipId");

-- CreateIndex
CREATE UNIQUE INDEX "AppliedProject_studentId_projectId_key" ON "AppliedProject"("studentId", "projectId");

-- AddForeignKey
ALTER TABLE "AppliedInternship" ADD CONSTRAINT "AppliedInternship_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "StudentUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppliedInternship" ADD CONSTRAINT "AppliedInternship_internshipId_fkey" FOREIGN KEY ("internshipId") REFERENCES "Internship"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppliedProject" ADD CONSTRAINT "AppliedProject_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "StudentUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppliedProject" ADD CONSTRAINT "AppliedProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
