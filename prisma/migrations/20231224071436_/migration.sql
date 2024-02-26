-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "title" TEXT DEFAULT 'Product',
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "condition" TEXT NOT NULL DEFAULT 'New',
    "shipment" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "qualification" DOUBLE PRECISION NOT NULL DEFAULT 5,
    "previewImg" TEXT NOT NULL DEFAULT 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.c2t8tS3Bw3wAu29lJZXcKgAAAA%26pid%3DApi&f=1&ipt=152bbe465eda1732e5837221e4a9c09866e36e0f8f0695e54deb8379d78f64b0&ipo=images',
    "seller" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "views" INTEGER DEFAULT 0,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductComplete" (
    "id" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 1,
    "description" TEXT,

    CONSTRAINT "ProductComplete_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductComplete" ADD CONSTRAINT "ProductComplete_id_fkey" FOREIGN KEY ("id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
