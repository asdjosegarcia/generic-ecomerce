/*
  Warnings:

  - Made the column `views` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "userProductsId" INTEGER,
ADD COLUMN     "userPurchasesId" INTEGER,
ALTER COLUMN "views" SET NOT NULL;

-- CreateTable
CREATE TABLE "UserPurchases" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserPurchases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProducts" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserProducts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserPurchases_userId_key" ON "UserPurchases"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserProducts_userId_key" ON "UserProducts"("userId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userPurchasesId_fkey" FOREIGN KEY ("userPurchasesId") REFERENCES "UserPurchases"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userProductsId_fkey" FOREIGN KEY ("userProductsId") REFERENCES "UserProducts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPurchases" ADD CONSTRAINT "UserPurchases_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProducts" ADD CONSTRAINT "UserProducts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
