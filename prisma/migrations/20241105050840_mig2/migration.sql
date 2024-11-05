/*
  Warnings:

  - Added the required column `facultyId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `facultyId` INTEGER NOT NULL;
