/*
  Warnings:

  - Made the column `productCompleteId` on table `Comment` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_productCompleteId_fkey";

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "productCompleteId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_productCompleteId_fkey" FOREIGN KEY ("productCompleteId") REFERENCES "ProductComplete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
