/*
  Warnings:

  - Added the required column `amount` to the `Tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventDate` to the `Tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchasedById` to the `Tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticketAvailable` to the `Tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Tickets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tickets" DROP CONSTRAINT "Tickets_addedById_fkey";

-- AlterTable
ALTER TABLE "Tickets" ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "eventDate" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "purchasedById" TEXT NOT NULL,
ADD COLUMN     "ticketAvailable" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Admin" (
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE INDEX "Tickets_purchasedById_idx" ON "Tickets"("purchasedById");

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "Admin"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_purchasedById_fkey" FOREIGN KEY ("purchasedById") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
