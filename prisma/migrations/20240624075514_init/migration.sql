/*
  Warnings:

  - You are about to drop the column `userId` on the `Order` table. All the data in the column will be lost.
  - The `jamKursus` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "userId",
ALTER COLUMN "tanggalKursus" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "tanggalKursus" SET DATA TYPE DATE,
DROP COLUMN "jamKursus",
ADD COLUMN     "jamKursus" TIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
