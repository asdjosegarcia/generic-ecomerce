/*
  Warnings:

  - You are about to drop the column `userId` on the `UserProducts` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserPurchases` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserProducts" DROP CONSTRAINT "UserProducts_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserPurchases" DROP CONSTRAINT "UserPurchases_userId_fkey";

-- DropIndex
DROP INDEX "UserProducts_userId_key";

-- DropIndex
DROP INDEX "UserPurchases_userId_key";

-- AlterTable
ALTER TABLE "UserProducts" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "UserPurchases" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "_userPurchases" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_userProducts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_userPurchases_AB_unique" ON "_userPurchases"("A", "B");

-- CreateIndex
CREATE INDEX "_userPurchases_B_index" ON "_userPurchases"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_userProducts_AB_unique" ON "_userProducts"("A", "B");

-- CreateIndex
CREATE INDEX "_userProducts_B_index" ON "_userProducts"("B");

-- AddForeignKey
ALTER TABLE "_userPurchases" ADD CONSTRAINT "_userPurchases_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userPurchases" ADD CONSTRAINT "_userPurchases_B_fkey" FOREIGN KEY ("B") REFERENCES "UserPurchases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userProducts" ADD CONSTRAINT "_userProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userProducts" ADD CONSTRAINT "_userProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "UserProducts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
