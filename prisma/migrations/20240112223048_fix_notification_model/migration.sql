-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_id_fkey";

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "notificationsId" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_notificationsId_fkey" FOREIGN KEY ("notificationsId") REFERENCES "Notifications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
