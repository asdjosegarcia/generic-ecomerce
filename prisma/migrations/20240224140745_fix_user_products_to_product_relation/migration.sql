/*
  Warnings:

  - You are about to drop the `_userProducts` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userProductsId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_userProducts" DROP CONSTRAINT "_userProducts_A_fkey";

-- DropForeignKey
ALTER TABLE "_userProducts" DROP CONSTRAINT "_userProducts_B_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "userProductsId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_userProducts";

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userProductsId_fkey" FOREIGN KEY ("userProductsId") REFERENCES "UserProducts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
