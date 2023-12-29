-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "Question" TEXT,
    "productCompleteId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_productCompleteId_fkey" FOREIGN KEY ("productCompleteId") REFERENCES "ProductComplete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
