-- CreateTable
CREATE TABLE "UserProfileImg" (
    "id" SERIAL NOT NULL,
    "mimetype" TEXT NOT NULL DEFAULT '',
    "data" BYTEA,

    CONSTRAINT "UserProfileImg_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserProfileImg" ADD CONSTRAINT "UserProfileImg_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
