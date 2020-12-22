CREATE SCHEMA `store` ;

CREATE TABLE `store`.`products` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` DECIMAL(7,2) NULL,
  `company_id` INT NULL,
  `units` INT NULL,
  `updatedAt` DATETIME(6) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `store`.`company` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `store`.`products` 
CHANGE COLUMN `company_id` `company_id` INT UNSIGNED NULL DEFAULT NULL ,
ADD INDEX `FK_PRODUCTS_TO_COMPANIES_idx` (`company_id` ASC) VISIBLE;
;

ALTER TABLE `store`.`products` 
ADD CONSTRAINT `FK_PRODUCTS_TO_COMPANIES`
  FOREIGN KEY (`company_id`)
  REFERENCES `store`.`company` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

insert into company (name) 
values 
	('Microsoft'),
	('Apple'),
	('Dell')
;