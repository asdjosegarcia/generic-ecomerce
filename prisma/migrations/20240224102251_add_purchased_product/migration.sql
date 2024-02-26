/*
  Warnings:

  - You are about to drop the column `userProductsId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `_userPurchases` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_userPurchases" DROP CONSTRAINT "_userPurchases_A_fkey";

-- DropForeignKey
ALTER TABLE "_userPurchases" DROP CONSTRAINT "_userPurchases_B_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "userProductsId";

-- DropTable
DROP TABLE "_userPurchases";

-- CreateTable
CREATE TABLE "PurchasedProduct" (
    "id" SERIAL NOT NULL,
    "originalId" INTEGER NOT NULL,
    "title" TEXT DEFAULT 'Product',
    "price" DOUBLE PRECISION,
    "condition" TEXT,
    "shipment" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "previewImg" TEXT NOT NULL DEFAULT '',
    "seller" TEXT,
    "previewImgBase" BYTEA,
    "previewImgMimetype" TEXT NOT NULL DEFAULT '',
    "userPurchasesId" INTEGER NOT NULL,

    CONSTRAINT "PurchasedProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PurchasedProduct" ADD CONSTRAINT "PurchasedProduct_userPurchasesId_fkey" FOREIGN KEY ("userPurchasesId") REFERENCES "UserPurchases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
