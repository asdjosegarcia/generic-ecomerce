-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "discountPrice" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "ProductComplete" ADD COLUMN     "colors" JSONB DEFAULT '{}',
ADD COLUMN     "images" JSONB DEFAULT '{ "image1": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixsector.com%2Fcache%2F517d8be6%2Fav5c8336583e291842624.png&f=1&nofb=1&ipt=f0dd3636f84b1ff677873f0bacc0999feaa87f94ce139855b0cdc836bf7246f3&ipo=images"}';

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "qualification" DOUBLE PRECISION NOT NULL DEFAULT 5.00,
    "comment" TEXT,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
