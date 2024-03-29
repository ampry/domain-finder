CREATE TABLE domain (
    `Domain Name` VARCHAR(255) NOT NULL,
    `TLD` VARCHAR(50) NULL,
    `Type` VARCHAR(50) NULL,
    `Auction End` DATE NULL,
    `ItemID` VARCHAR(50) NULL,
    `Traffic` INT NULL,
    `Bids` INT NULL,
    `Price` DECIMAL(10, 2) NULL,
    `Estimated Value` DECIMAL(10, 2) NULL,
    `Domain Age` INT NULL,
    `Auction End Time` DATETIME NULL,
    `Sale Type` VARCHAR(50) NULL, 
    `Majestic TF` INT NULL,
    `Majestic CF` INT NULL,
    `Backlinks` INT NULL,
    `Referring Domains` INT NULL,
    `Current bid` DECIMAL(10, 2) NULL,
    `Release date` DATE NULL,
    `is_clean` BOOLEAN NULL
);
