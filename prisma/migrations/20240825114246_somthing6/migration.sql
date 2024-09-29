/*
  Warnings:

  - You are about to drop the column `company` on the `Internship` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Internship` table. All the data in the column will be lost.
  - Added the required column `maxSal` to the `Internship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minSal` to the `Internship` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Internship" DROP COLUMN "company",
DROP COLUMN "location",
ADD COLUMN     "maxSal" INTEGER NOT NULL,
ADD COLUMN     "minSal" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "technologies" DROP NOT NULL;
