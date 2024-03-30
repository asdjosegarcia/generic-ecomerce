-- AlterTable
ALTER TABLE "ProductComplete" ALTER COLUMN "images" SET DEFAULT '{ }';

-- CreateTable
CREATE TABLE "CartProductQuantity" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "cartId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "CartProductQuantity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CartProductQuantity" ADD CONSTRAINT "CartProductQuantity_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartProductQuantity" ADD CONSTRAINT "CartProductQuantity_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
