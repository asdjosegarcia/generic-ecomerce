/*
  Warnings:

  - You are about to drop the column `productId` on the `ProductImages` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductImages" DROP CONSTRAINT "ProductImages_productId_fkey";

-- AlterTable
ALTER TABLE "ProductImages" DROP COLUMN "productId",
ADD COLUMN     "productCompleteId" INTEGER;

-- AddForeignKey
ALTER TABLE "ProductImages" ADD CONSTRAINT "ProductImages_productCompleteId_fkey" FOREIGN KEY ("productCompleteId") REFERENCES "ProductComplete"("id") ON DELETE SET NULL ON UPDATE CASCADE;
