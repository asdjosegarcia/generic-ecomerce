/*
  Warnings:

  - Made the column `password` on table `Favorites` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Favorites" ALTER COLUMN "password" SET NOT NULL;
