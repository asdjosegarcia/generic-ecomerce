/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `ProductPreviewImage` will be added. If there are existing duplicate values, this will fail.
  - Made the column `productId` on table `ProductPreviewImage` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ProductPreviewImage" DROP CONSTRAINT "ProductPreviewImage_productId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "productPreviewImageId" INTEGER;

-- AlterTable
ALTER TABLE "ProductPreviewImage" ALTER COLUMN "productId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ProductPreviewImage_productId_key" ON "ProductPreviewImage"("productId");

-- AddForeignKey
ALTER TABLE "ProductPreviewImage" ADD CONSTRAINT "ProductPreviewImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
