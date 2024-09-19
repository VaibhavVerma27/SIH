/*
  Warnings:

  - You are about to drop the column `purchasedById` on the `Tickets` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tickets" DROP CONSTRAINT "Tickets_purchasedById_fkey";

-- DropIndex
DROP INDEX "Tickets_purchasedById_idx";

-- AlterTable
ALTER TABLE "Tickets" DROP COLUMN "purchasedById";
