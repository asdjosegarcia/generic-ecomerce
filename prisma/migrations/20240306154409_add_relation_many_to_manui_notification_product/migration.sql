-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "type" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "view" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "_notificationProducts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_notificationProducts_AB_unique" ON "_notificationProducts"("A", "B");

-- CreateIndex
CREATE INDEX "_notificationProducts_B_index" ON "_notificationProducts"("B");

-- AddForeignKey
ALTER TABLE "_notificationProducts" ADD CONSTRAINT "_notificationProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "Notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_notificationProducts" ADD CONSTRAINT "_notificationProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
