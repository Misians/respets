/*
  Warnings:

  - You are about to drop the `animal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `foto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `foto` DROP FOREIGN KEY `Foto_animalId_fkey`;

-- DropForeignKey
ALTER TABLE `posts` DROP FOREIGN KEY `posts_animalId_fkey`;

-- DropTable
DROP TABLE `animal`;

-- DropTable
DROP TABLE `foto`;

-- CreateTable
CREATE TABLE `animais` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `especie` VARCHAR(191) NOT NULL,
    `cor` VARCHAR(191) NOT NULL,
    `detalhes` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `imagens` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `animalId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `posts` ADD CONSTRAINT `posts_animalId_fkey` FOREIGN KEY (`animalId`) REFERENCES `animais`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `imagens` ADD CONSTRAINT `imagens_animalId_fkey` FOREIGN KEY (`animalId`) REFERENCES `animais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
