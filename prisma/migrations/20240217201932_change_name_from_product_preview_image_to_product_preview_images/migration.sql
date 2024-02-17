/*
  Warnings:

  - You are about to drop the `ProductPreviewImages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductPreviewImages" DROP CONSTRAINT "ProductPreviewImages_productId_fkey";

-- DropTable
DROP TABLE "ProductPreviewImages";

-- CreateTable
CREATE TABLE "ProductPreviewImage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "mimetype" TEXT NOT NULL DEFAULT '',
    "data" BYTEA,
    "productId" INTEGER,

    CONSTRAINT "ProductPreviewImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductPreviewImage" ADD CONSTRAINT "ProductPreviewImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
