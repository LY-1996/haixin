/*
Navicat MySQL Data Transfer

Source Server         : haixin
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : shuju

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2020-08-03 23:07:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user1
-- ----------------------------
DROP TABLE IF EXISTS `user1`;
CREATE TABLE `user1` (
  `name` varchar(20) NOT NULL,
  `pass` varchar(16) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user1
-- ----------------------------
INSERT INTO `user1` VALUES ('lch1234567', 'zaq123456');
INSERT INTO `user1` VALUES ('l12345678', '1234567');
INSERT INTO `user1` VALUES ('lch123456', '1234567');
INSERT INTO `user1` VALUES ('ly1234', '12349cyud');
INSERT INTO `user1` VALUES ('lch133334', '1234567');
INSERT INTO `user1` VALUES ('lchszu', 'z1234567');
INSERT INTO `user1` VALUES ('lch12345', '123456');
INSERT INTO `user1` VALUES ('bj123456', '123456');
INSERT INTO `user1` VALUES ('12345lll', '123456');
INSERT INTO `user1` VALUES ('ly123456', '123456');
INSERT INTO `user1` VALUES ('l123456', '123456');
INSERT INTO `user1` VALUES ('y123456', '123456');
INSERT INTO `user1` VALUES ('w1234567', '123456');
