/*
  Warnings:

  - Added the required column `productId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Made the column `productCompleteId` on table `Comment` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_productCompleteId_fkey";

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "productId" INTEGER NOT NULL,
ALTER COLUMN "productCompleteId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_productCompleteId_fkey" FOREIGN KEY ("productCompleteId") REFERENCES "ProductComplete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
