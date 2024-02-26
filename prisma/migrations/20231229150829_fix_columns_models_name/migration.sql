/*
  Warnings:

  - You are about to drop the column `Question` on the `Question` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "Question",
ADD COLUMN     "question" TEXT;
