/*
  Warnings:

  - You are about to alter the column `createTime` on the `collection` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `collection` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `collection` MODIFY `createTime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME NULL;

-- CreateTable
CREATE TABLE `Version` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `uiSrc` VARCHAR(191) NULL,
    `testCaseSrc` VARCHAR(191) NULL,
    `productSrc` VARCHAR(191) NULL,
    `isDone` INTEGER NOT NULL,
    `startTime` DATETIME NULL,
    `testTime` DATETIME NULL,
    `completeTime` DATETIME NULL,
    `createTime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `Version_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Issue` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL,
    `type` INTEGER NOT NULL,
    `overTime` DATETIME(3) NULL,
    `createTime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
