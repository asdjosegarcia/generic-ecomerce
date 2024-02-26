/*
  Warnings:

  - Added the required column `mimetype` to the `ProductImages` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `ProductImages` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ProductImages" ADD COLUMN     "mimetype" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;
