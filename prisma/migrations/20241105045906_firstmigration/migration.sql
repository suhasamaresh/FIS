-- CreateTable
CREATE TABLE `FacultyPersonalDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `facultyId` INTEGER NOT NULL,
    `qualification` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NULL,
    `title` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `middleName` VARCHAR(191) NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `emailId` VARCHAR(191) NOT NULL,
    `contactNo` VARCHAR(191) NOT NULL,
    `alternateContactNo` VARCHAR(191) NULL,
    `emergencyContactNo` VARCHAR(191) NULL,
    `adharNo` VARCHAR(191) NOT NULL,
    `panNo` VARCHAR(191) NULL,
    `dob` DATETIME(3) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `firstAddressLine1` VARCHAR(191) NOT NULL,
    `firstAddressLine2` VARCHAR(191) NULL,
    `firstAddressLine3` VARCHAR(191) NULL,
    `correspondenceAddressLine1` VARCHAR(191) NOT NULL,
    `correspondenceAddressLine2` VARCHAR(191) NULL,
    `correspondenceAddressLine3` VARCHAR(191) NULL,
    `religion` VARCHAR(191) NULL,
    `caste` VARCHAR(191) NULL,
    `category` VARCHAR(191) NULL,
    `motherTongue` VARCHAR(191) NOT NULL,
    `speciallyChallenged` BOOLEAN NOT NULL,
    `remarks` VARCHAR(191) NULL,

    UNIQUE INDEX `FacultyPersonalDetails_facultyId_key`(`facultyId`),
    UNIQUE INDEX `FacultyPersonalDetails_emailId_key`(`emailId`),
    UNIQUE INDEX `FacultyPersonalDetails_adharNo_key`(`adharNo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FacultyFinancialData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `facultyId` INTEGER NOT NULL,
    `bankName` VARCHAR(191) NOT NULL,
    `accountNo` VARCHAR(191) NOT NULL,
    `accountName` VARCHAR(191) NOT NULL,
    `accountType` VARCHAR(191) NOT NULL,
    `branch` VARCHAR(191) NOT NULL,
    `ifsc` VARCHAR(191) NOT NULL,
    `pfNumber` VARCHAR(191) NULL,
    `uanNumber` VARCHAR(191) NULL,
    `pensionNumber` VARCHAR(191) NULL,

    UNIQUE INDEX `FacultyFinancialData_facultyId_key`(`facultyId`),
    UNIQUE INDEX `FacultyFinancialData_accountNo_key`(`accountNo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FacultyEducation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `facultyId` INTEGER NOT NULL,
    `classProgram` VARCHAR(191) NOT NULL,
    `usnSsn` VARCHAR(191) NOT NULL,
    `schoolCollege` VARCHAR(191) NOT NULL,
    `specialization` VARCHAR(191) NOT NULL,
    `mediumOfInstruction` VARCHAR(191) NOT NULL,
    `directCorr` VARCHAR(191) NOT NULL,
    `passClass` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `FacultyEducation_facultyId_key`(`facultyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FacultyDependants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `facultyId` INTEGER NOT NULL,
    `motherName` VARCHAR(191) NULL,
    `fatherName` VARCHAR(191) NULL,
    `spouseName` VARCHAR(191) NULL,
    `children` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_password_key`(`password`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
