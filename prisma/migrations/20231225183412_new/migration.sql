/*
  Warnings:

  - You are about to drop the column `productId` on the `Comment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_productId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "productId",
ADD COLUMN     "productCompleteId" INTEGER;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_productCompleteId_fkey" FOREIGN KEY ("productCompleteId") REFERENCES "ProductComplete"("id") ON DELETE SET NULL ON UPDATE CASCADE;
