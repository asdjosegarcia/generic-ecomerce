/*
  Warnings:

  - You are about to drop the column `password` on the `Notifications` table. All the data in the column will be lost.
  - Added the required column `password` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Notifications" DROP COLUMN "password";
