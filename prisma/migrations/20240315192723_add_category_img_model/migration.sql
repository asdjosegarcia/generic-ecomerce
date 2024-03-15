-- CreateTable
CREATE TABLE "CategoryImg" (
    "id" SERIAL NOT NULL,
    "imgUrl" TEXT,
    "name" TEXT,
    "mimetype" TEXT,
    "data" BYTEA,

    CONSTRAINT "CategoryImg_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CategoryImg" ADD CONSTRAINT "CategoryImg_id_fkey" FOREIGN KEY ("id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
