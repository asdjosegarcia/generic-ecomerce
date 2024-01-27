/*
  Warnings:

  - You are about to drop the column `favoritesId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_favoritesId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "favoritesId";

-- CreateTable
CREATE TABLE "_favoritesPorducts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_favoritesPorducts_AB_unique" ON "_favoritesPorducts"("A", "B");

-- CreateIndex
CREATE INDEX "_favoritesPorducts_B_index" ON "_favoritesPorducts"("B");

-- AddForeignKey
ALTER TABLE "_favoritesPorducts" ADD CONSTRAINT "_favoritesPorducts_A_fkey" FOREIGN KEY ("A") REFERENCES "Favorites"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_favoritesPorducts" ADD CONSTRAINT "_favoritesPorducts_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
