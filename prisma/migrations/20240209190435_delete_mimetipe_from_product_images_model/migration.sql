/*
  Warnings:

  - You are about to drop the column `filename` on the `ProductImages` table. All the data in the column will be lost.
  - You are about to drop the column `mimetype` on the `ProductImages` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductImages" DROP COLUMN "filename",
DROP COLUMN "mimetype",
ADD COLUMN     "name" TEXT;
