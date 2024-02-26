/*
  Warnings:

  - You are about to drop the column `userPurchasesId` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `UserProducts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `UserPurchases` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `UserProducts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `UserPurchases` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_userProductsId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_userPurchasesId_fkey";

-- DropForeignKey
ALTER TABLE "_userProducts" DROP CONSTRAINT "_userProducts_A_fkey";

-- DropForeignKey
ALTER TABLE "_userPurchases" DROP CONSTRAINT "_userPurchases_A_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "userPurchasesId";

-- AlterTable
ALTER TABLE "UserProducts" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UserPurchases" ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserProducts_userId_key" ON "UserProducts"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserPurchases_userId_key" ON "UserPurchases"("userId");

-- AddForeignKey
ALTER TABLE "UserPurchases" ADD CONSTRAINT "UserPurchases_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProducts" ADD CONSTRAINT "UserProducts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userPurchases" ADD CONSTRAINT "_userPurchases_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userProducts" ADD CONSTRAINT "_userProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
