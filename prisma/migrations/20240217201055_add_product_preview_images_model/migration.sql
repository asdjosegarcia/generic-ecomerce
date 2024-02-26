-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "previewImg" SET DEFAULT '';

-- CreateTable
CREATE TABLE "ProductPreviewImages" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "mimetype" TEXT NOT NULL DEFAULT '',
    "data" BYTEA,
    "productId" INTEGER,

    CONSTRAINT "ProductPreviewImages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductPreviewImages" ADD CONSTRAINT "ProductPreviewImages_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
