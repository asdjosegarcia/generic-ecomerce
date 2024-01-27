/*
  Warnings:

  - You are about to drop the column `cartId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_cartId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "cartId";

-- CreateTable
CREATE TABLE "_cartProducts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_cartProducts_AB_unique" ON "_cartProducts"("A", "B");

-- CreateIndex
CREATE INDEX "_cartProducts_B_index" ON "_cartProducts"("B");

-- AddForeignKey
ALTER TABLE "_cartProducts" ADD CONSTRAINT "_cartProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "Cart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_cartProducts" ADD CONSTRAINT "_cartProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
