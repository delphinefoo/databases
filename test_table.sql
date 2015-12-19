-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
--
-- ---

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Rooms'
--
-- ---

DROP TABLE IF EXISTS `Rooms`;

CREATE TABLE `Rooms` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Roomname` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Messages'
--
-- ---

DROP TABLE IF EXISTS `Messages`;

CREATE TABLE `Messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `roomname` INTEGER NULL DEFAULT NULL,
  `username` INTEGER NULL DEFAULT NULL,
  `text` INTEGER NULL DEFAULT NULL,
  `createdAt` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Join-Users/Messages'
--
-- ---

DROP TABLE IF EXISTS `Join-Users/Messages`;

CREATE TABLE `Join-Users/Messages` (
  `user-id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `message-id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`user-id`)
);

-- ---
-- Table 'Join-Rooms/Messages'
--
-- ---

DROP TABLE IF EXISTS `Join-Rooms/Messages`;

CREATE TABLE `Join-Rooms/Messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `roomname-id` INTEGER NULL DEFAULT NULL,
  `message-id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Join-Users/Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Join-Rooms/Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`username`) VALUES
-- ('','');
-- INSERT INTO `Rooms` (`id`,`Roomname`) VALUES
-- ('','');
-- INSERT INTO `Messages` (`id`,`roomname`,`username`,`text`,`createdAt`) VALUES
-- ('','','','','');
-- INSERT INTO `Join-Users/Messages` (`user-id`,`message-id`) VALUES
-- ('','');
-- INSERT INTO `Join-Rooms/Messages` (`id`,`roomname-id`,`message-id`) VALUES
-- ('','','');