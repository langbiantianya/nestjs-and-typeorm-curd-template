/*
 Navicat Premium Data Transfer

 Source Server         : 192.168.0.85
 Source Server Type    : MySQL
 Source Server Version : 50723
 Source Host           : 192.168.0.85:3306
 Source Schema         : node_js_test

 Target Server Type    : MySQL
 Target Server Version : 50723
 File Encoding         : 65001

 Date: 25/04/2022 14:29:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cpl_data
-- ----------------------------
DROP TABLE IF EXISTS `cpl_data`;
CREATE TABLE `cpl_data`  (
  `PKID` int(22) NOT NULL AUTO_INCREMENT,
  `CPL_DT` date NULL DEFAULT NULL,
  `DATA_SRC` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `STATUS` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `BUS_NM` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `MCHNT_NM` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `MCHNT_CLASS` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `BUS_TP` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `MCHNT_CD` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `ADD_INF` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `CPL_USER_NM` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `CARD_ID` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `TRANS_DT` date NULL DEFAULT NULL,
  `TRANS_AT` int(255) NULL DEFAULT NULL,
  `MOBILE_NO` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `MSDD_RSN` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `CRT_DT` datetime(0) NULL DEFAULT NULL,
  `CRT_USER_ID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `CRT_USER_NM` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `UPT_DT` datetime(0) NULL DEFAULT NULL,
  `UPT_USER_ID` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `UPT_USER_NM` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `UPT_ACT` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `FLAG` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`PKID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2190 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cpl_data
-- ----------------------------
INSERT INTO `cpl_data` VALUES (2146, '2022-01-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-24 13:48:58', NULL, NULL, '2022-04-25 10:29:15', NULL, NULL, 'D', '0');
INSERT INTO `cpl_data` VALUES (2147, '2022-01-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-24 16:50:26', NULL, NULL, '2022-04-25 10:29:16', NULL, NULL, 'D', '0');
INSERT INTO `cpl_data` VALUES (2148, '2022-01-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-24 16:50:28', NULL, NULL, '2022-04-25 10:29:17', NULL, NULL, 'D', '0');
INSERT INTO `cpl_data` VALUES (2149, '2020-01-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-24 16:52:54', NULL, NULL, '2022-04-25 10:29:18', NULL, NULL, 'D', '0');
INSERT INTO `cpl_data` VALUES (2150, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-24 17:11:58', NULL, NULL, '2022-04-25 10:29:18', NULL, NULL, 'D', '0');
INSERT INTO `cpl_data` VALUES (2151, '2022-04-25', NULL, 'I', '123', '123', '123', NULL, '123', '123', '123', '123', '2022-04-04', NULL, '123', NULL, '2022-04-25 09:12:31', NULL, NULL, '2022-04-25 10:53:47', NULL, NULL, 'D', '0');
INSERT INTO `cpl_data` VALUES (2152, '2023-04-25', NULL, 'I', '123', '321', '321', NULL, '321', '321', '321', '321', '2022-04-06', NULL, '321', NULL, '2022-04-25 10:42:14', NULL, NULL, '2022-04-25 10:53:47', NULL, NULL, 'D', '0');
INSERT INTO `cpl_data` VALUES (2153, '2022-04-29', NULL, 'I', '123', '1234', '12345', NULL, '123456', '1234567', '1234567', '123456789', '2022-04-01', 123, '123456789', NULL, '2022-04-25 10:55:40', NULL, NULL, '2022-04-25 14:19:36', NULL, NULL, 'U', '1');
INSERT INTO `cpl_data` VALUES (2154, '2022-04-01', NULL, 'I', '45', '765', '756', NULL, '543', '4321', 'dsf', '23', '2022-04-26', NULL, '43212', NULL, '2022-04-25 10:56:10', NULL, NULL, '2022-04-25 10:56:10', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2155, '2020-04-02', NULL, 'I', '233', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:35', NULL, NULL, '2022-04-25 14:19:50', NULL, NULL, 'U', '1');
INSERT INTO `cpl_data` VALUES (2156, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:37', NULL, NULL, '2022-04-25 12:51:37', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2157, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:38', NULL, NULL, '2022-04-25 12:51:38', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2158, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:38', NULL, NULL, '2022-04-25 12:51:38', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2159, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:39', NULL, NULL, '2022-04-25 12:51:39', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2160, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:40', NULL, NULL, '2022-04-25 12:51:40', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2161, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:41', NULL, NULL, '2022-04-25 12:51:41', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2162, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:42', NULL, NULL, '2022-04-25 12:51:42', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2163, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:43', NULL, NULL, '2022-04-25 12:51:43', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2164, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:44', NULL, NULL, '2022-04-25 12:51:44', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2165, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:44', NULL, NULL, '2022-04-25 12:51:44', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2166, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:45', NULL, NULL, '2022-04-25 12:51:45', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2167, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:45', NULL, NULL, '2022-04-25 12:51:45', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2168, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:46', NULL, NULL, '2022-04-25 12:51:46', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2169, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:46', NULL, NULL, '2022-04-25 12:51:46', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2170, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:47', NULL, NULL, '2022-04-25 12:51:47', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2171, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:48', NULL, NULL, '2022-04-25 12:51:48', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2172, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:48', NULL, NULL, '2022-04-25 12:51:48', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2173, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:49', NULL, NULL, '2022-04-25 12:51:49', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2174, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:50', NULL, NULL, '2022-04-25 12:51:50', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2175, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:50', NULL, NULL, '2022-04-25 12:51:50', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2176, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:51', NULL, NULL, '2022-04-25 12:51:51', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2177, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:52', NULL, NULL, '2022-04-25 12:51:52', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2178, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:53', NULL, NULL, '2022-04-25 12:51:53', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2179, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:53', NULL, NULL, '2022-04-25 12:51:53', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2180, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:54', NULL, NULL, '2022-04-25 12:51:54', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2181, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:54', NULL, NULL, '2022-04-25 12:51:54', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2182, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:55', NULL, NULL, '2022-04-25 12:51:55', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2183, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:56', NULL, NULL, '2022-04-25 12:51:56', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2184, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:56', NULL, NULL, '2022-04-25 12:51:56', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2185, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:57', NULL, NULL, '2022-04-25 12:51:57', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2186, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:58', NULL, NULL, '2022-04-25 12:51:58', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2187, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:51:59', NULL, NULL, '2022-04-25 12:51:59', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2188, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:52:00', NULL, NULL, '2022-04-25 12:52:00', NULL, NULL, 'I', '1');
INSERT INTO `cpl_data` VALUES (2189, '2020-04-02', NULL, 'I', '营业名称', '商户名称', '商户类型', NULL, '123456', '地址信息', '投诉人姓名', '123456', '2022-03-01', 6666, '138865', '违规原因', '2022-04-25 12:52:01', NULL, NULL, '2022-04-25 12:52:01', NULL, NULL, 'I', '1');

SET FOREIGN_KEY_CHECKS = 1;
