-- AlterTable
ALTER TABLE "PurchasedProduct" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "paymentType" TEXT NOT NULL DEFAULT '';