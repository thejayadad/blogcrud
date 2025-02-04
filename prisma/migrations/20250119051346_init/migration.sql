/*
  Warnings:

  - You are about to drop the column `subdirectory` on the `HeroBanner` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "HeroBanner_subdirectory_key";

-- AlterTable
ALTER TABLE "HeroBanner" DROP COLUMN "subdirectory";
