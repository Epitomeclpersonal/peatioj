-- MySQL dump 10.13  Distrib 5.7.20, for Linux (x86_64)
--
-- Host: localhost    Database: peatio_development
-- ------------------------------------------------------
-- Server version	5.7.20-0ubuntu0.17.10.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `account_versions`
--

LOCK TABLES `account_versions` WRITE;
/*!40000 ALTER TABLE `account_versions` DISABLE KEYS */;
INSERT INTO `account_versions` VALUES (1,1,2,1000,0.0002685500000000,0.0000000000000000,0.0000000000000000,0.0002685500000000,1,'Deposit','2017-11-09 15:37:00','2017-11-09 15:37:00',2,3),(2,1,2,1000,0.0001342700000000,0.0000000000000000,0.0000000000000000,0.0004028200000000,2,'Deposit','2017-11-09 15:38:00','2017-11-09 15:38:00',2,3),(3,1,2,1000,0.0000671300000000,0.0000000000000000,0.0000000000000000,0.0004699500000000,3,'Deposit','2017-11-09 15:38:00','2017-11-09 15:38:00',2,3),(4,1,2,1000,0.0000550000000000,0.0000000000000000,0.0000000000000000,0.0005249500000000,4,'Deposit','2017-11-09 15:38:00','2017-11-09 15:38:00',2,3),(5,1,2,1000,0.0000550000000000,0.0000000000000000,0.0000000000000000,0.0005799500000000,5,'Deposit','2017-11-09 15:38:00','2017-11-09 15:38:00',2,3),(6,1,2,1000,0.0000550000000000,0.0000000000000000,0.0000000000000000,0.0006349500000000,6,'Deposit','2017-11-09 15:38:01','2017-11-09 15:38:01',2,3),(7,1,2,1000,0.0000550000000000,0.0000000000000000,0.0000000000000000,0.0006899500000000,7,'Deposit','2017-11-09 15:48:07','2017-11-09 15:48:07',2,3),(8,1,2,1000,0.0000550000000000,0.0000000000000000,0.0000000000000000,0.0007449500000000,8,'Deposit','2017-11-09 15:48:07','2017-11-09 15:48:07',2,3),(9,1,2,1000,0.0000550000000000,0.0000000000000000,0.0000000000000000,0.0007999500000000,9,'Deposit','2017-11-09 15:48:07','2017-11-09 15:48:07',2,3),(10,1,2,1000,0.0000550000000000,0.0000000000000000,0.0000000000000000,0.0008549500000000,10,'Deposit','2017-11-09 15:48:07','2017-11-09 15:48:07',2,3);
/*!40000 ALTER TABLE `account_versions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (1,1,1,0.0000000000000000,0.0000000000000000,'2017-10-12 10:02:52','2017-10-12 10:02:52',NULL,NULL,NULL),(2,1,2,0.0008549500000000,0.0000000000000000,'2017-10-12 10:02:52','2017-10-12 10:02:52',NULL,NULL,NULL),(3,1,3,0.0000000000000000,0.0000000000000000,'2017-10-12 10:02:52','2017-10-12 10:02:52',NULL,NULL,NULL),(4,2,1,0.0000000000000000,0.0000000000000000,'2017-10-12 10:02:52','2017-10-12 10:02:52',NULL,NULL,NULL),(5,2,2,0.0000000000000000,0.0000000000000000,'2017-10-12 10:02:52','2017-10-12 10:02:52',NULL,NULL,NULL),(6,2,3,0.0000000000000000,0.0000000000000000,'2017-10-12 10:02:52','2017-10-12 10:02:52',NULL,NULL,NULL),(7,3,1,0.0000000000000000,0.0000000000000000,'2017-10-12 10:02:53','2017-10-12 10:02:53',NULL,NULL,NULL),(8,3,2,0.0000000000000000,0.0000000000000000,'2017-10-12 10:02:53','2017-10-12 10:02:53',NULL,NULL,NULL),(9,3,3,0.0000000000000000,0.0000000000000000,'2017-10-12 10:02:53','2017-10-12 10:02:53',NULL,NULL,NULL),(10,4,1,0.0000000000000000,0.0000000000000000,'2017-10-12 11:09:30','2017-10-12 11:09:30',NULL,NULL,NULL),(11,4,2,0.0000000000000000,0.0000000000000000,'2017-10-12 11:09:30','2017-10-12 11:09:30',NULL,NULL,NULL),(12,4,3,0.0000000000000000,0.0000000000000000,'2017-10-12 11:09:30','2017-10-12 11:09:30',NULL,NULL,NULL),(13,5,1,0.0000000000000000,0.0000000000000000,'2017-10-12 17:09:51','2017-10-12 17:09:51',NULL,NULL,NULL),(14,5,2,0.0000000000000000,0.0000000000000000,'2017-10-12 17:09:51','2017-10-12 17:09:51',NULL,NULL,NULL),(15,5,3,0.0000000000000000,0.0000000000000000,'2017-10-12 17:09:51','2017-10-12 17:09:51',NULL,NULL,NULL);
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_tokens`
--

LOCK TABLES `api_tokens` WRITE;
/*!40000 ALTER TABLE `api_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `assets`
--

LOCK TABLES `assets` WRITE;
/*!40000 ALTER TABLE `assets` DISABLE KEYS */;
INSERT INTO `assets` VALUES (1,'Asset::IdDocumentFile',4,'IdDocument','ae4e1cba-7296-42b6-93fa-cad16de20b54.png'),(2,'Asset::IdBillFile',4,'IdDocument','93b97c0c-aa83-477f-a8fe-d3ae63a5ac6b.png');
/*!40000 ALTER TABLE `assets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `audit_logs`
--

LOCK TABLES `audit_logs` WRITE;
/*!40000 ALTER TABLE `audit_logs` DISABLE KEYS */;
INSERT INTO `audit_logs` VALUES (1,'Audit::TransferAuditLog',NULL,'2017-11-09 15:36:38','2017-11-09 15:36:38',1,'Deposit','submitting','submitted'),(2,'Audit::TransferAuditLog',NULL,'2017-11-09 15:36:56','2017-11-09 15:36:56',2,'Deposit','submitting','submitted'),(3,'Audit::TransferAuditLog',NULL,'2017-11-09 15:37:00','2017-11-09 15:37:00',1,'Deposit','submitted','accepted'),(4,'Audit::TransferAuditLog',NULL,'2017-11-09 15:37:03','2017-11-09 15:37:03',3,'Deposit','submitting','submitted'),(5,'Audit::TransferAuditLog',NULL,'2017-11-09 15:37:05','2017-11-09 15:37:05',4,'Deposit','submitting','submitted'),(6,'Audit::TransferAuditLog',NULL,'2017-11-09 15:37:09','2017-11-09 15:37:09',5,'Deposit','submitting','submitted'),(7,'Audit::TransferAuditLog',NULL,'2017-11-09 15:37:13','2017-11-09 15:37:13',6,'Deposit','submitting','submitted'),(8,'Audit::TransferAuditLog',NULL,'2017-11-09 15:38:00','2017-11-09 15:38:00',2,'Deposit','submitted','accepted'),(9,'Audit::TransferAuditLog',NULL,'2017-11-09 15:38:00','2017-11-09 15:38:00',3,'Deposit','submitted','accepted'),(10,'Audit::TransferAuditLog',NULL,'2017-11-09 15:38:00','2017-11-09 15:38:00',4,'Deposit','submitted','accepted'),(11,'Audit::TransferAuditLog',NULL,'2017-11-09 15:38:00','2017-11-09 15:38:00',5,'Deposit','submitted','accepted'),(12,'Audit::TransferAuditLog',NULL,'2017-11-09 15:38:01','2017-11-09 15:38:01',6,'Deposit','submitted','accepted'),(13,'Audit::TransferAuditLog',NULL,'2017-11-09 15:47:03','2017-11-09 15:47:03',7,'Deposit','submitting','submitted'),(14,'Audit::TransferAuditLog',NULL,'2017-11-09 15:47:08','2017-11-09 15:47:08',8,'Deposit','submitting','submitted'),(15,'Audit::TransferAuditLog',NULL,'2017-11-09 15:47:13','2017-11-09 15:47:13',9,'Deposit','submitting','submitted'),(16,'Audit::TransferAuditLog',NULL,'2017-11-09 15:47:19','2017-11-09 15:47:19',10,'Deposit','submitting','submitted'),(17,'Audit::TransferAuditLog',NULL,'2017-11-09 15:48:07','2017-11-09 15:48:07',7,'Deposit','submitted','accepted'),(18,'Audit::TransferAuditLog',NULL,'2017-11-09 15:48:07','2017-11-09 15:48:07',8,'Deposit','submitted','accepted'),(19,'Audit::TransferAuditLog',NULL,'2017-11-09 15:48:07','2017-11-09 15:48:07',9,'Deposit','submitted','accepted'),(20,'Audit::TransferAuditLog',NULL,'2017-11-09 15:48:07','2017-11-09 15:48:07',10,'Deposit','submitted','accepted');
/*!40000 ALTER TABLE `audit_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `authentications`
--

LOCK TABLES `authentications` WRITE;
/*!40000 ALTER TABLE `authentications` DISABLE KEYS */;
INSERT INTO `authentications` VALUES (1,'identity','1',NULL,NULL,1,'2017-10-12 10:02:52','2017-10-12 10:02:52',NULL),(2,'identity','2',NULL,NULL,2,'2017-10-12 10:02:52','2017-10-12 10:02:52',NULL),(3,'identity','3',NULL,NULL,3,'2017-10-12 10:02:53','2017-10-12 10:02:53',NULL),(4,'identity','4',NULL,NULL,4,'2017-10-12 11:09:30','2017-10-12 11:09:30',NULL),(5,'identity','5',NULL,NULL,5,'2017-10-12 17:09:51','2017-10-12 17:09:51',NULL);
/*!40000 ALTER TABLE `authentications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `deposits`
--

LOCK TABLES `deposits` WRITE;
/*!40000 ALTER TABLE `deposits` DISABLE KEYS */;
INSERT INTO `deposits` VALUES (1,2,1,2,0.0002685500000000,0.0000000000000000,NULL,NULL,'f475a041ea49ea28b342c37aa2410844c7c0573d37791910c5dbfa5d1009f7e9',NULL,'accepted','2017-11-09 15:36:38','2017-11-09 15:38:06',NULL,'3','Deposits::Satoshi',1,0),(2,2,1,2,0.0001342700000000,0.0000000000000000,NULL,NULL,'1218889c59f16f45c7f281813cd69a365f0f11d959bc66203b570bc77e159b96',NULL,'accepted','2017-11-09 15:36:56','2017-11-09 15:38:21',NULL,'3','Deposits::Satoshi',2,0),(3,2,1,2,0.0000671300000000,0.0000000000000000,NULL,NULL,'a7a8f9a85731621ae8f59468f8d4158ef33c402f1405456a3e64619e791e035e',NULL,'accepted','2017-11-09 15:37:03','2017-11-09 15:38:21',NULL,'4','Deposits::Satoshi',3,0),(4,2,1,2,0.0000550000000000,0.0000000000000000,NULL,NULL,'3865c3818463669b303e88be83f9c0e80d1916c10a2a2f4ca95dbdf056eec3bf',NULL,'accepted','2017-11-09 15:37:05','2017-11-09 15:38:21',NULL,'4','Deposits::Satoshi',4,0),(5,2,1,2,0.0000550000000000,0.0000000000000000,NULL,NULL,'966b7f983de6004a2a7e27bd9359f08ae29b5bd32ea837febc1bfc4ef232e1f7',NULL,'accepted','2017-11-09 15:37:09','2017-11-09 15:38:21',NULL,'4','Deposits::Satoshi',5,0),(6,2,1,2,0.0000550000000000,0.0000000000000000,NULL,NULL,'5a3409b8eb1d8dcf42ec6de1011111aaa6f3e9b8bdebf09f0e1bc69eaa8e2ff2',NULL,'accepted','2017-11-09 15:37:13','2017-11-09 15:38:21',NULL,'4','Deposits::Satoshi',6,0),(7,2,1,2,0.0000550000000000,0.0000000000000000,NULL,NULL,'d87d482666c03c6b8ffc71283db1886cb9e3629b0a43ae9ab34948bec39afdac',NULL,'accepted','2017-11-09 15:47:03','2017-11-09 15:49:43',NULL,'3','Deposits::Satoshi',7,0),(8,2,1,2,0.0000550000000000,0.0000000000000000,NULL,NULL,'5c9f29f74e3d09863050147858d9c1fdf4d25472144e4c31e83f9d30f820066a',NULL,'accepted','2017-11-09 15:47:08','2017-11-09 15:49:43',NULL,'3','Deposits::Satoshi',8,0),(9,2,1,2,0.0000550000000000,0.0000000000000000,NULL,NULL,'fd0ead5fce445ffc9d49d0745d868f211c868751cbe2c794aa3cd20286379662',NULL,'accepted','2017-11-09 15:47:13','2017-11-09 15:49:43',NULL,'3','Deposits::Satoshi',9,0),(10,2,1,2,0.0000550000000000,0.0000000000000000,NULL,NULL,'a045200ad5bde5c20cd23b3d60f9b489cc8834bfaa5c165f5094c07e5b90f9fe',NULL,'accepted','2017-11-09 15:47:19','2017-11-09 15:49:43',NULL,'3','Deposits::Satoshi',10,0);
/*!40000 ALTER TABLE `deposits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `document_translations`
--

LOCK TABLES `document_translations` WRITE;
/*!40000 ALTER TABLE `document_translations` DISABLE KEYS */;
/*!40000 ALTER TABLE `document_translations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `documents`
--

LOCK TABLES `documents` WRITE;
/*!40000 ALTER TABLE `documents` DISABLE KEYS */;
/*!40000 ALTER TABLE `documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `fund_sources`
--

LOCK TABLES `fund_sources` WRITE;
/*!40000 ALTER TABLE `fund_sources` DISABLE KEYS */;
/*!40000 ALTER TABLE `fund_sources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `id_documents`
--

LOCK TABLES `id_documents` WRITE;
/*!40000 ALTER TABLE `id_documents` DISABLE KEYS */;
INSERT INTO `id_documents` VALUES (1,0,'aa','1',1,'2017-10-12 10:02:52','2017-11-09 15:34:45','1947-11-09','','','','',0,'verified'),(2,NULL,NULL,NULL,2,'2017-10-12 10:02:52','2017-10-12 10:02:52',NULL,NULL,NULL,NULL,NULL,NULL,'unverified'),(3,NULL,NULL,NULL,3,'2017-10-12 10:02:53','2017-10-12 10:02:53',NULL,NULL,NULL,NULL,NULL,NULL,'unverified'),(4,0,'이지동','111',4,'2017-10-12 11:09:30','2017-10-12 17:19:53','1988-07-26','aaa','aaa','AM','111',0,'verified'),(5,0,'김민석','11111111111',5,'2017-10-12 17:09:51','2017-10-12 17:19:38','1947-10-12','','','','',0,'verified');
/*!40000 ALTER TABLE `id_documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `identities`
--

LOCK TABLES `identities` WRITE;
/*!40000 ALTER TABLE `identities` DISABLE KEYS */;
INSERT INTO `identities` VALUES (1,'admin@peatio.dev','$2a$10$1XNTuJ0tzrYGzn9fe2al5eaZ.aHCLLSnI4S2B64lIPOdPZ/Sk4.Cy',1,NULL,NULL,NULL,NULL,'2017-10-12 10:02:52','2017-10-12 10:02:52'),(2,'foo@peatio.dev','$2a$10$OPhWAtPuMKsR6vBdJTMHiOrxGnSWQJdlaWnPXF77sYNULpBA78U6u',1,NULL,NULL,NULL,NULL,'2017-10-12 10:02:52','2017-10-12 10:02:52'),(3,'bar@peatio.dev','$2a$10$wqJnq2bQGrBFXI.qQyKBAuna1hbhRUrsKMhQjVJDm3CDsX4GR7D8W',1,NULL,NULL,NULL,NULL,'2017-10-12 10:02:53','2017-10-12 10:02:53'),(4,'jdlee726@gmail.com','$2a$10$rohuzQaW4Pc0HQ4EUCFdSeMGX1u7IJxBB3397pqLjxQ45fRtvpTzG',NULL,NULL,NULL,NULL,NULL,'2017-10-12 11:09:29','2017-10-12 11:09:29'),(5,'mskim@epit.io','$2a$10$hB3dFjTVhbxVsgfAOcKinuJNeR/stSKQ9bQzew72Jm0Mxjt/ddz7.',NULL,NULL,NULL,NULL,NULL,'2017-10-12 17:09:51','2017-10-12 17:09:51');
/*!40000 ALTER TABLE `identities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (1,'PEADEBMBYNWTIO',NULL,'admin@peatio.dev',NULL,'2017-10-12 10:02:52','2017-10-12 17:17:26',NULL,1,NULL,'8201032071923',0,0,NULL),(2,'PEAWX4UFGAYTIO',NULL,'foo@peatio.dev',NULL,'2017-10-12 10:02:52','2017-10-12 10:02:52',NULL,NULL,NULL,NULL,0,0,NULL),(3,'PEAAQBYFFPUTIO',NULL,'bar@peatio.dev',NULL,'2017-10-12 10:02:53','2017-10-12 10:02:53',NULL,NULL,NULL,NULL,0,0,NULL),(4,'PEAS4QOB6H4TIO',NULL,'jdlee726@gmail.com',NULL,'2017-10-12 11:09:29','2017-10-12 13:06:55',NULL,1,NULL,NULL,0,0,NULL),(5,'PEALCUVDOVETIO',NULL,'mskim@epit.io',NULL,'2017-10-12 17:09:51','2017-10-12 17:12:57',NULL,1,NULL,NULL,0,0,NULL);
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `oauth_access_grants`
--

LOCK TABLES `oauth_access_grants` WRITE;
/*!40000 ALTER TABLE `oauth_access_grants` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_access_grants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `oauth_access_tokens`
--

LOCK TABLES `oauth_access_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `oauth_applications`
--

LOCK TABLES `oauth_applications` WRITE;
/*!40000 ALTER TABLE `oauth_applications` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `partial_trees`
--

LOCK TABLES `partial_trees` WRITE;
/*!40000 ALTER TABLE `partial_trees` DISABLE KEYS */;
/*!40000 ALTER TABLE `partial_trees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `payment_addresses`
--

LOCK TABLES `payment_addresses` WRITE;
/*!40000 ALTER TABLE `payment_addresses` DISABLE KEYS */;
INSERT INTO `payment_addresses` VALUES (1,11,NULL,'2017-10-12 17:20:30','2017-10-12 17:20:30',2),(2,12,NULL,'2017-10-12 17:20:30','2017-10-12 17:20:30',3),(3,14,'miaiFEzgAHyu2S8sXuC2ekY7iy8aaaMHx3','2017-10-12 17:20:46','2017-11-24 16:05:37',2),(4,15,NULL,'2017-10-12 17:20:47','2017-10-12 17:20:47',3),(5,2,'myNdj2mQQ8TGLmBFDPpb7BPbA8zr2mLWXy','2017-11-09 15:33:44','2017-11-09 15:33:44',2),(6,3,NULL,'2017-11-09 15:33:44','2017-11-09 15:33:44',3),(7,2,'mjvDZXHuoPLiV9BFUbYoSwfQCDnmQowrxw','2017-12-30 00:44:48','2017-12-30 00:44:49',2);
/*!40000 ALTER TABLE `payment_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `payment_transactions`
--

LOCK TABLES `payment_transactions` WRITE;
/*!40000 ALTER TABLE `payment_transactions` DISABLE KEYS */;
INSERT INTO `payment_transactions` VALUES (1,'f475a041ea49ea28b342c37aa2410844c7c0573d37791910c5dbfa5d1009f7e9',0.0002685500000000,3,'myNdj2mQQ8TGLmBFDPpb7BPbA8zr2mLWXy',NULL,'confirmed','2017-11-09 15:36:38','2017-11-09 15:38:06','2017-11-09 15:36:37',NULL,2,'PaymentTransaction::Normal',0),(2,'1218889c59f16f45c7f281813cd69a365f0f11d959bc66203b570bc77e159b96',0.0001342700000000,3,'myNdj2mQQ8TGLmBFDPpb7BPbA8zr2mLWXy',NULL,'confirmed','2017-11-09 15:36:56','2017-11-09 15:38:21','2017-11-09 15:36:56',NULL,2,'PaymentTransaction::Normal',0),(3,'a7a8f9a85731621ae8f59468f8d4158ef33c402f1405456a3e64619e791e035e',0.0000671300000000,4,'myNdj2mQQ8TGLmBFDPpb7BPbA8zr2mLWXy',NULL,'confirmed','2017-11-09 15:37:03','2017-11-09 15:38:21','2017-11-09 15:37:03',NULL,2,'PaymentTransaction::Normal',0),(4,'3865c3818463669b303e88be83f9c0e80d1916c10a2a2f4ca95dbdf056eec3bf',0.0000550000000000,4,'myNdj2mQQ8TGLmBFDPpb7BPbA8zr2mLWXy',NULL,'confirmed','2017-11-09 15:37:05','2017-11-09 15:38:21','2017-11-09 15:37:04',NULL,2,'PaymentTransaction::Normal',0),(5,'966b7f983de6004a2a7e27bd9359f08ae29b5bd32ea837febc1bfc4ef232e1f7',0.0000550000000000,4,'myNdj2mQQ8TGLmBFDPpb7BPbA8zr2mLWXy',NULL,'confirmed','2017-11-09 15:37:09','2017-11-09 15:38:21','2017-11-09 15:37:09',NULL,2,'PaymentTransaction::Normal',0),(6,'5a3409b8eb1d8dcf42ec6de1011111aaa6f3e9b8bdebf09f0e1bc69eaa8e2ff2',0.0000550000000000,4,'myNdj2mQQ8TGLmBFDPpb7BPbA8zr2mLWXy',NULL,'confirmed','2017-11-09 15:37:13','2017-11-09 15:38:21','2017-11-09 15:37:12',NULL,2,'PaymentTransaction::Normal',0),(7,'d87d482666c03c6b8ffc71283db1886cb9e3629b0a43ae9ab34948bec39afdac',0.0000550000000000,3,'myNdj2mQQ8TGLmBFDPpb7BPbA8zr2mLWXy',NULL,'confirmed','2017-11-09 15:47:03','2017-11-09 15:49:43','2017-11-09 15:47:03',NULL,2,'PaymentTransaction::Normal',0),(8,'5c9f29f74e3d09863050147858d9c1fdf4d25472144e4c31e83f9d30f820066a',0.0000550000000000,3,'myNdj2mQQ8TGLmBFDPpb7BPbA8zr2mLWXy',NULL,'confirmed','2017-11-09 15:47:08','2017-11-09 15:49:43','2017-11-09 15:47:07',NULL,2,'PaymentTransaction::Normal',0),(9,'fd0ead5fce445ffc9d49d0745d868f211c868751cbe2c794aa3cd20286379662',0.0000550000000000,3,'myNdj2mQQ8TGLmBFDPpb7BPbA8zr2mLWXy',NULL,'confirmed','2017-11-09 15:47:13','2017-11-09 15:49:43','2017-11-09 15:47:13',NULL,2,'PaymentTransaction::Normal',0),(10,'a045200ad5bde5c20cd23b3d60f9b489cc8834bfaa5c165f5094c07e5b90f9fe',0.0000550000000000,3,'myNdj2mQQ8TGLmBFDPpb7BPbA8zr2mLWXy',NULL,'confirmed','2017-11-09 15:47:19','2017-11-09 15:49:43','2017-11-09 15:47:18',NULL,2,'PaymentTransaction::Normal',0);
/*!40000 ALTER TABLE `payment_transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `proofs`
--

LOCK TABLES `proofs` WRITE;
/*!40000 ALTER TABLE `proofs` DISABLE KEYS */;
/*!40000 ALTER TABLE `proofs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `read_marks`
--

LOCK TABLES `read_marks` WRITE;
/*!40000 ALTER TABLE `read_marks` DISABLE KEYS */;
INSERT INTO `read_marks` VALUES (1,NULL,1,'Comment','2017-10-12 10:02:52'),(2,NULL,1,'Ticket','2017-10-12 10:02:52'),(3,NULL,2,'Comment','2017-10-12 10:02:52'),(4,NULL,2,'Ticket','2017-10-12 10:02:52'),(5,NULL,3,'Comment','2017-10-12 10:02:53'),(6,NULL,3,'Ticket','2017-10-12 10:02:53'),(7,NULL,4,'Comment','2017-10-12 11:09:30'),(8,NULL,4,'Ticket','2017-10-12 11:09:30'),(9,NULL,5,'Comment','2017-10-12 17:09:51'),(10,NULL,5,'Ticket','2017-10-12 17:09:51');
/*!40000 ALTER TABLE `read_marks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `running_accounts`
--

LOCK TABLES `running_accounts` WRITE;
/*!40000 ALTER TABLE `running_accounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `running_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `schema_migrations`
--

LOCK TABLES `schema_migrations` WRITE;
/*!40000 ALTER TABLE `schema_migrations` DISABLE KEYS */;
INSERT INTO `schema_migrations` VALUES ('20130624011823'),('20130629015414'),('20130810162023'),('20130901010953'),('20130901154530'),('20130903080937'),('20130904215802'),('20130905025823'),('20130905132250'),('20130906073020'),('20130906073931'),('20130907110146'),('20130907124647'),('20130912144526'),('20130915150504'),('20130918143551'),('20130919091853'),('20130925154257'),('20130925165804'),('20130925171856'),('20130925175113'),('20130926011813'),('20130926014845'),('20130926075355'),('20130926170008'),('20130928080757'),('20130928113620'),('20130928122042'),('20130928165236'),('20130928190156'),('20130928194048'),('20130929012418'),('20130930172651'),('20130930183833'),('20131001103847'),('20131002012809'),('20131002190141'),('20131003003357'),('20131003021225'),('20131006183340'),('20131009132505'),('20131022035138'),('20131027012836'),('20131110214254'),('20131130190923'),('20131201011127'),('20131204020953'),('20131208012814'),('20131224162832'),('20140101175408'),('20140102024125'),('20140102172835'),('20140102172836'),('20140105034746'),('20140302094520'),('20140302094729'),('20140302161905'),('20140303060739'),('20140303080054'),('20140304015055'),('20140306020939'),('20140306021833'),('20140312061206'),('20140312071704'),('20140319022202'),('20140319022302'),('20140320142701'),('20140324060148'),('20140324062812'),('20140326170234'),('20140326191837'),('20140327044440'),('20140327062025'),('20140327065708'),('20140327105217'),('20140328101707'),('20140329070543'),('20140331084541'),('20140402043033'),('20140403031847'),('20140403070840'),('20140404074816'),('20140404101823'),('20140405053744'),('20140407011310'),('20140416143239'),('20140416143352'),('20140416151403'),('20140416194209'),('20140416194300'),('20140418082715'),('20140421061712'),('20140421080408'),('20140428203350'),('20140507120249'),('20140524014413'),('20140530133210'),('20140531054739'),('20140618004355'),('20140702035833'),('20140703065321'),('20140703070953'),('20140707115022'),('20140709084906'),('20140709085158'),('20140712030803'),('20140714143823'),('20140715002401'),('20140715040545'),('20140715083857'),('20140717033231'),('20140718134132'),('20140718141345'),('20140721125900'),('20140724033014'),('20140803202610'),('20140804002557'),('20140804151249'),('20140806141035'),('20140806141419'),('20140819085359'),('20140819090417'),('20140826083906'),('20140826093508'),('20140902112641'),('20140920062130'),('20141002075102'),('20141003040822'),('20141003061259'),('20141010083930'),('20141012124243'),('20141014085101'),('20141015034040'),('20141105023306'),('20141105090746'),('20141107031140'),('20141119155043'),('20141203042029'),('20141216120736'),('20150117151634'),('20150205011423'),('20150405053726');
/*!40000 ALTER TABLE `schema_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `signup_histories`
--

LOCK TABLES `signup_histories` WRITE;
/*!40000 ALTER TABLE `signup_histories` DISABLE KEYS */;
INSERT INTO `signup_histories` VALUES (1,1,'175.211.140.90','ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36','2017-10-12 10:08:49'),(2,1,'175.211.140.90','ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36','2017-10-12 11:02:43'),(3,4,'175.211.140.90','ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36','2017-10-12 11:09:30'),(4,1,'175.211.140.90','ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36','2017-10-12 12:31:22'),(5,4,'175.211.140.90','ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36','2017-10-12 12:36:24'),(6,4,'175.211.140.90','ko-KR','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063','2017-10-12 13:07:07'),(7,4,'175.211.140.90','ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36','2017-10-12 17:06:55'),(8,5,'175.211.140.90','ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36','2017-10-12 17:09:52'),(9,5,'175.211.140.90','ko-KR','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063','2017-10-12 17:13:23'),(10,1,'175.211.140.90','ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36','2017-10-12 17:14:39'),(11,1,'175.211.140.90','ko-KR','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063','2017-10-12 17:18:20'),(12,4,'175.211.140.90','ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36','2017-10-12 17:20:21'),(13,4,'175.211.140.90','ko-KR','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063','2017-10-12 17:23:39'),(14,4,'175.121.177.167','ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36','2017-10-12 22:57:20'),(15,1,'175.121.177.167','ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36','2017-10-12 23:17:40'),(16,1,'175.121.177.167','ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36','2017-10-31 23:11:13'),(17,4,'175.121.177.167','ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36','2017-10-31 23:24:48'),(18,4,'175.121.177.167','ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4','Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-A310N0 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/6.2 Chrome/56.0.2924.87 Mobile Safari/537.36','2017-10-31 23:45:50'),(19,4,'175.121.177.167','ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4','Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-A310N0 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/6.2 Chrome/56.0.2924.87 Mobile Safari/537.36','2017-10-31 23:46:36'),(20,4,'211.33.189.149','ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36','2017-11-01 10:42:30'),(21,1,'175.121.177.167','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36','2017-11-01 21:24:52'),(22,1,'175.121.177.167','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36','2017-11-06 20:45:31'),(23,1,'211.33.189.149','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36','2017-11-07 16:20:16'),(24,1,'175.121.177.167','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36','2017-11-08 19:14:13'),(25,1,'175.121.177.167','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36','2017-11-09 10:33:12'),(26,1,'175.121.177.167','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36','2017-11-09 15:31:17'),(27,2,'175.121.177.167','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36','2017-11-09 15:32:01'),(28,1,'175.121.177.167','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36','2017-11-09 15:32:22'),(29,1,'127.0.0.1','ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:56.0) Gecko/20100101 Firefox/56.0','2017-11-09 15:44:22'),(30,1,'192.168.0.1','ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:56.0) Gecko/20100101 Firefox/56.0','2017-11-09 15:44:52'),(31,1,'221.167.243.174','ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36','2017-11-16 19:06:43'),(32,1,'211.48.51.34','ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36','2017-11-20 21:59:37'),(33,1,'127.0.0.1','ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3','Mozilla/5.0 (X11; Linux x86_64; rv:57.0) Gecko/20100101 Firefox/57.0','2017-11-24 14:58:00'),(34,1,'192.168.0.1','ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3','Mozilla/5.0 (X11; Linux x86_64; rv:57.0) Gecko/20100101 Firefox/57.0','2017-11-24 14:58:11'),(35,5,'211.33.189.149','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36','2017-11-24 14:59:04'),(36,1,'192.168.0.1','en-US,en;q=0.5','Mozilla/5.0 (X11; Linux x86_64; rv:57.0) Gecko/20100101 Firefox/57.0','2017-11-24 15:14:10'),(37,1,'211.33.189.149','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36','2017-11-24 15:47:12'),(38,1,'175.121.177.167','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36','2017-11-26 23:07:41'),(39,1,'14.32.241.238','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36','2017-11-28 16:08:17'),(40,1,'14.32.241.238','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36','2017-11-28 16:08:29'),(41,1,'14.32.241.238','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36','2017-11-28 16:09:18'),(42,5,'14.32.241.238','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36','2017-11-28 16:09:49'),(43,1,'1.222.20.189','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36','2017-11-28 18:35:46'),(44,1,'1.222.20.189','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36','2017-11-28 19:40:19'),(45,1,'127.0.0.1','ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3','Mozilla/5.0 (X11; Linux x86_64; rv:57.0) Gecko/20100101 Firefox/57.0','2017-11-28 20:45:36'),(46,1,'192.168.0.1','ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3','Mozilla/5.0 (X11; Linux x86_64; rv:57.0) Gecko/20100101 Firefox/57.0','2017-11-28 20:45:49'),(47,1,'1.222.20.189','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36','2017-11-28 21:12:52'),(48,1,'175.121.177.167','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36','2017-11-29 15:38:51'),(49,1,'175.121.177.167','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36','2017-11-30 12:03:14'),(50,5,'221.148.61.230','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36','2017-12-01 16:05:58'),(51,1,'127.0.0.1','ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:57.0) Gecko/20100101 Firefox/57.0','2017-12-06 11:07:05'),(52,1,'192.168.0.1','ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:57.0) Gecko/20100101 Firefox/57.0','2017-12-06 11:07:17'),(53,1,'211.33.189.149','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36','2017-12-06 11:35:30'),(54,5,'211.33.189.149','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36','2017-12-06 16:14:16'),(55,1,'175.121.177.167','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36','2017-12-18 21:21:08'),(56,1,'175.121.177.167','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36','2017-12-25 10:35:52'),(57,1,'175.121.177.167','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36','2017-12-26 11:34:53'),(58,1,'220.85.184.110','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Linux; Android 7.0; SM-A310N0 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Mobile Safari/537.36','2017-12-27 19:41:29'),(59,1,'14.32.157.187','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36','2017-12-30 00:24:41'),(60,1,'121.163.23.27','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36','2018-01-02 14:56:35'),(61,1,'175.121.177.167','ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36','2018-01-03 19:20:38');
/*!40000 ALTER TABLE `signup_histories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `simple_captcha_data`
--

LOCK TABLES `simple_captcha_data` WRITE;
/*!40000 ALTER TABLE `simple_captcha_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `simple_captcha_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `taggings`
--

LOCK TABLES `taggings` WRITE;
/*!40000 ALTER TABLE `taggings` DISABLE KEYS */;
INSERT INTO `taggings` VALUES (1,1,2,'Member',NULL,NULL,'tags','2017-10-12 10:02:53'),(2,2,2,'Member',NULL,NULL,'tags','2017-10-12 10:02:53'),(3,1,3,'Member',NULL,NULL,'tags','2017-10-12 10:02:53'),(4,2,3,'Member',NULL,NULL,'tags','2017-10-12 10:02:53');
/*!40000 ALTER TABLE `taggings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (2,'hero'),(1,'vip');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
INSERT INTO `tokens` VALUES (1,'425dfdf922147181b231debd0aad5eca','2017-10-12 11:39:30',4,0,'Token::Activation','2017-10-12 11:09:30','2017-10-12 11:09:30'),(2,'13cd68f0770dfb6d82353dc97b56d665','2017-10-12 13:23:15',4,1,'Token::Activation','2017-10-12 12:53:15','2017-10-12 13:06:55'),(3,'7e67d02d67ecefface471897035dce3f','2017-10-12 17:39:52',5,1,'Token::Activation','2017-10-12 17:09:52','2017-10-12 17:12:57'),(4,'1e66f8e65075383e59b9c2b34cd200f4','2017-10-12 17:46:46',1,1,'Token::Activation','2017-10-12 17:16:46','2017-10-12 17:17:26');
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `trades`
--

LOCK TABLES `trades` WRITE;
/*!40000 ALTER TABLE `trades` DISABLE KEYS */;
/*!40000 ALTER TABLE `trades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `two_factors`
--

LOCK TABLES `two_factors` WRITE;
/*!40000 ALTER TABLE `two_factors` DISABLE KEYS */;
INSERT INTO `two_factors` VALUES (1,1,'km7b65kgdcn6gcgx','2017-12-06 11:35:55',1,'TwoFactor::App','2017-10-12 10:02:52'),(2,1,'746222',NULL,NULL,'TwoFactor::Sms','2017-10-12 10:02:52'),(3,2,'eeqnabjdig3yi46h',NULL,NULL,'TwoFactor::App','2017-10-12 10:02:52'),(4,2,'847384',NULL,NULL,'TwoFactor::Sms','2017-10-12 10:02:52'),(5,3,'pobyk4i3lhatt7zw',NULL,NULL,'TwoFactor::App','2017-10-12 10:02:53'),(6,3,'609580',NULL,NULL,'TwoFactor::Sms','2017-10-12 10:02:53'),(7,4,'720371',NULL,NULL,'TwoFactor::Sms','2017-10-12 11:09:30'),(8,4,'znvv3r2ghgf5nvas','2017-10-12 11:39:51',1,'TwoFactor::App','2017-10-12 11:09:30'),(9,5,'041369',NULL,NULL,'TwoFactor::Sms','2017-10-12 17:09:52'),(10,5,'viciauahaivxirea','2017-10-12 17:20:41',1,'TwoFactor::App','2017-10-12 17:09:52');
/*!40000 ALTER TABLE `two_factors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `versions`
--

LOCK TABLES `versions` WRITE;
/*!40000 ALTER TABLE `versions` DISABLE KEYS */;
INSERT INTO `versions` VALUES (1,'Deposit',1,'update',NULL,'---\nid: 1\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.00026855\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: f475a041ea49ea28b342c37aa2410844c7c0573d37791910c5dbfa5d1009f7e9\nstate: \naasm_state: submitting\ncreated_at: 2017-11-09 06:36:38.000000000 Z\nupdated_at: 2017-11-09 06:36:38.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 1\ntxout: 0\n','2017-11-09 15:36:38'),(2,'Deposit',2,'update',NULL,'---\nid: 2\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.00013427\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 1218889c59f16f45c7f281813cd69a365f0f11d959bc66203b570bc77e159b96\nstate: \naasm_state: submitting\ncreated_at: 2017-11-09 06:36:56.000000000 Z\nupdated_at: 2017-11-09 06:36:56.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 2\ntxout: 0\n','2017-11-09 15:36:56'),(3,'Deposit',1,'update',NULL,'---\nid: 1\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.00026855\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: f475a041ea49ea28b342c37aa2410844c7c0573d37791910c5dbfa5d1009f7e9\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:36:38.000000000 Z\nupdated_at: 2017-11-09 06:36:38.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 1\ntxout: 0\n','2017-11-09 15:37:00'),(4,'Deposit',1,'update',NULL,'---\nid: 1\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.00026855\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: f475a041ea49ea28b342c37aa2410844c7c0573d37791910c5dbfa5d1009f7e9\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:36:38.000000000 Z\nupdated_at: 2017-11-09 06:37:00.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 1\ntxout: 0\n','2017-11-09 15:37:00'),(5,'Deposit',3,'update',NULL,'---\nid: 3\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.00006713\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: a7a8f9a85731621ae8f59468f8d4158ef33c402f1405456a3e64619e791e035e\nstate: \naasm_state: submitting\ncreated_at: 2017-11-09 06:37:03.000000000 Z\nupdated_at: 2017-11-09 06:37:03.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 3\ntxout: 0\n','2017-11-09 15:37:03'),(6,'Deposit',4,'update',NULL,'---\nid: 4\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 3865c3818463669b303e88be83f9c0e80d1916c10a2a2f4ca95dbdf056eec3bf\nstate: \naasm_state: submitting\ncreated_at: 2017-11-09 06:37:05.000000000 Z\nupdated_at: 2017-11-09 06:37:05.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 4\ntxout: 0\n','2017-11-09 15:37:05'),(7,'Deposit',5,'update',NULL,'---\nid: 5\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 966b7f983de6004a2a7e27bd9359f08ae29b5bd32ea837febc1bfc4ef232e1f7\nstate: \naasm_state: submitting\ncreated_at: 2017-11-09 06:37:09.000000000 Z\nupdated_at: 2017-11-09 06:37:09.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 5\ntxout: 0\n','2017-11-09 15:37:09'),(8,'Deposit',6,'update',NULL,'---\nid: 6\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 5a3409b8eb1d8dcf42ec6de1011111aaa6f3e9b8bdebf09f0e1bc69eaa8e2ff2\nstate: \naasm_state: submitting\ncreated_at: 2017-11-09 06:37:13.000000000 Z\nupdated_at: 2017-11-09 06:37:13.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 6\ntxout: 0\n','2017-11-09 15:37:13'),(9,'Deposit',1,'update',NULL,'---\nid: 1\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.00026855\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: f475a041ea49ea28b342c37aa2410844c7c0573d37791910c5dbfa5d1009f7e9\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:36:38.000000000 Z\nupdated_at: 2017-11-09 06:37:00.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 1\ntxout: 0\n','2017-11-09 15:38:00'),(10,'Deposit',2,'update',NULL,'---\nid: 2\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.00013427\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 1218889c59f16f45c7f281813cd69a365f0f11d959bc66203b570bc77e159b96\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:36:56.000000000 Z\nupdated_at: 2017-11-09 06:36:56.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 2\ntxout: 0\n','2017-11-09 15:38:00'),(11,'Deposit',2,'update',NULL,'---\nid: 2\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.00013427\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 1218889c59f16f45c7f281813cd69a365f0f11d959bc66203b570bc77e159b96\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:36:56.000000000 Z\nupdated_at: 2017-11-09 06:38:00.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 2\ntxout: 0\n','2017-11-09 15:38:00'),(12,'Deposit',3,'update',NULL,'---\nid: 3\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.00006713\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: a7a8f9a85731621ae8f59468f8d4158ef33c402f1405456a3e64619e791e035e\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:37:03.000000000 Z\nupdated_at: 2017-11-09 06:37:03.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 3\ntxout: 0\n','2017-11-09 15:38:00'),(13,'Deposit',3,'update',NULL,'---\nid: 3\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.00006713\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: a7a8f9a85731621ae8f59468f8d4158ef33c402f1405456a3e64619e791e035e\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:37:03.000000000 Z\nupdated_at: 2017-11-09 06:38:00.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 3\ntxout: 0\n','2017-11-09 15:38:00'),(14,'Deposit',4,'update',NULL,'---\nid: 4\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 3865c3818463669b303e88be83f9c0e80d1916c10a2a2f4ca95dbdf056eec3bf\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:37:05.000000000 Z\nupdated_at: 2017-11-09 06:37:05.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 4\ntxout: 0\n','2017-11-09 15:38:00'),(15,'Deposit',4,'update',NULL,'---\nid: 4\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 3865c3818463669b303e88be83f9c0e80d1916c10a2a2f4ca95dbdf056eec3bf\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:37:05.000000000 Z\nupdated_at: 2017-11-09 06:38:00.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 4\ntxout: 0\n','2017-11-09 15:38:00'),(16,'Deposit',5,'update',NULL,'---\nid: 5\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 966b7f983de6004a2a7e27bd9359f08ae29b5bd32ea837febc1bfc4ef232e1f7\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:37:09.000000000 Z\nupdated_at: 2017-11-09 06:37:09.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 5\ntxout: 0\n','2017-11-09 15:38:00'),(17,'Deposit',5,'update',NULL,'---\nid: 5\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 966b7f983de6004a2a7e27bd9359f08ae29b5bd32ea837febc1bfc4ef232e1f7\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:37:09.000000000 Z\nupdated_at: 2017-11-09 06:38:00.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 5\ntxout: 0\n','2017-11-09 15:38:00'),(18,'Deposit',6,'update',NULL,'---\nid: 6\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 5a3409b8eb1d8dcf42ec6de1011111aaa6f3e9b8bdebf09f0e1bc69eaa8e2ff2\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:37:13.000000000 Z\nupdated_at: 2017-11-09 06:37:13.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 6\ntxout: 0\n','2017-11-09 15:38:00'),(19,'Deposit',6,'update',NULL,'---\nid: 6\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 5a3409b8eb1d8dcf42ec6de1011111aaa6f3e9b8bdebf09f0e1bc69eaa8e2ff2\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:37:13.000000000 Z\nupdated_at: 2017-11-09 06:38:00.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 6\ntxout: 0\n','2017-11-09 15:38:01'),(20,'Deposit',1,'update',NULL,'---\nid: 1\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.00026855\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: f475a041ea49ea28b342c37aa2410844c7c0573d37791910c5dbfa5d1009f7e9\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:36:38.000000000 Z\nupdated_at: 2017-11-09 06:38:00.000000000 Z\ndone_at: \nconfirmations: \'2\'\ntype: Deposits::Satoshi\npayment_transaction_id: 1\ntxout: 0\n','2017-11-09 15:38:06'),(21,'Deposit',2,'update',NULL,'---\nid: 2\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.00013427\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 1218889c59f16f45c7f281813cd69a365f0f11d959bc66203b570bc77e159b96\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:36:56.000000000 Z\nupdated_at: 2017-11-09 06:38:00.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 2\ntxout: 0\n','2017-11-09 15:38:06'),(22,'Deposit',3,'update',NULL,'---\nid: 3\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.00006713\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: a7a8f9a85731621ae8f59468f8d4158ef33c402f1405456a3e64619e791e035e\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:37:03.000000000 Z\nupdated_at: 2017-11-09 06:38:00.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 3\ntxout: 0\n','2017-11-09 15:38:06'),(23,'Deposit',4,'update',NULL,'---\nid: 4\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 3865c3818463669b303e88be83f9c0e80d1916c10a2a2f4ca95dbdf056eec3bf\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:37:05.000000000 Z\nupdated_at: 2017-11-09 06:38:00.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 4\ntxout: 0\n','2017-11-09 15:38:06'),(24,'Deposit',5,'update',NULL,'---\nid: 5\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 966b7f983de6004a2a7e27bd9359f08ae29b5bd32ea837febc1bfc4ef232e1f7\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:37:09.000000000 Z\nupdated_at: 2017-11-09 06:38:00.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 5\ntxout: 0\n','2017-11-09 15:38:06'),(25,'Deposit',6,'update',NULL,'---\nid: 6\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 5a3409b8eb1d8dcf42ec6de1011111aaa6f3e9b8bdebf09f0e1bc69eaa8e2ff2\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:37:13.000000000 Z\nupdated_at: 2017-11-09 06:38:01.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 6\ntxout: 0\n','2017-11-09 15:38:06'),(26,'Deposit',2,'update',NULL,'---\nid: 2\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.00013427\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 1218889c59f16f45c7f281813cd69a365f0f11d959bc66203b570bc77e159b96\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:36:56.000000000 Z\nupdated_at: 2017-11-09 06:38:06.000000000 Z\ndone_at: \nconfirmations: \'2\'\ntype: Deposits::Satoshi\npayment_transaction_id: 2\ntxout: 0\n','2017-11-09 15:38:21'),(27,'Deposit',3,'update',NULL,'---\nid: 3\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.00006713\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: a7a8f9a85731621ae8f59468f8d4158ef33c402f1405456a3e64619e791e035e\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:37:03.000000000 Z\nupdated_at: 2017-11-09 06:38:06.000000000 Z\ndone_at: \nconfirmations: \'2\'\ntype: Deposits::Satoshi\npayment_transaction_id: 3\ntxout: 0\n','2017-11-09 15:38:21'),(28,'Deposit',4,'update',NULL,'---\nid: 4\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 3865c3818463669b303e88be83f9c0e80d1916c10a2a2f4ca95dbdf056eec3bf\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:37:05.000000000 Z\nupdated_at: 2017-11-09 06:38:06.000000000 Z\ndone_at: \nconfirmations: \'2\'\ntype: Deposits::Satoshi\npayment_transaction_id: 4\ntxout: 0\n','2017-11-09 15:38:21'),(29,'Deposit',5,'update',NULL,'---\nid: 5\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 966b7f983de6004a2a7e27bd9359f08ae29b5bd32ea837febc1bfc4ef232e1f7\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:37:09.000000000 Z\nupdated_at: 2017-11-09 06:38:06.000000000 Z\ndone_at: \nconfirmations: \'2\'\ntype: Deposits::Satoshi\npayment_transaction_id: 5\ntxout: 0\n','2017-11-09 15:38:21'),(30,'Deposit',6,'update',NULL,'---\nid: 6\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 5a3409b8eb1d8dcf42ec6de1011111aaa6f3e9b8bdebf09f0e1bc69eaa8e2ff2\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:37:13.000000000 Z\nupdated_at: 2017-11-09 06:38:06.000000000 Z\ndone_at: \nconfirmations: \'2\'\ntype: Deposits::Satoshi\npayment_transaction_id: 6\ntxout: 0\n','2017-11-09 15:38:21'),(31,'Deposit',7,'update',NULL,'---\nid: 7\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: d87d482666c03c6b8ffc71283db1886cb9e3629b0a43ae9ab34948bec39afdac\nstate: \naasm_state: submitting\ncreated_at: 2017-11-09 06:47:03.000000000 Z\nupdated_at: 2017-11-09 06:47:03.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 7\ntxout: 0\n','2017-11-09 15:47:03'),(32,'Deposit',8,'update',NULL,'---\nid: 8\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 5c9f29f74e3d09863050147858d9c1fdf4d25472144e4c31e83f9d30f820066a\nstate: \naasm_state: submitting\ncreated_at: 2017-11-09 06:47:08.000000000 Z\nupdated_at: 2017-11-09 06:47:08.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 8\ntxout: 0\n','2017-11-09 15:47:08'),(33,'Deposit',9,'update',NULL,'---\nid: 9\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: fd0ead5fce445ffc9d49d0745d868f211c868751cbe2c794aa3cd20286379662\nstate: \naasm_state: submitting\ncreated_at: 2017-11-09 06:47:13.000000000 Z\nupdated_at: 2017-11-09 06:47:13.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 9\ntxout: 0\n','2017-11-09 15:47:13'),(34,'Deposit',10,'update',NULL,'---\nid: 10\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: a045200ad5bde5c20cd23b3d60f9b489cc8834bfaa5c165f5094c07e5b90f9fe\nstate: \naasm_state: submitting\ncreated_at: 2017-11-09 06:47:19.000000000 Z\nupdated_at: 2017-11-09 06:47:19.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 10\ntxout: 0\n','2017-11-09 15:47:19'),(35,'Deposit',7,'update',NULL,'---\nid: 7\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: d87d482666c03c6b8ffc71283db1886cb9e3629b0a43ae9ab34948bec39afdac\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:47:03.000000000 Z\nupdated_at: 2017-11-09 06:47:03.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 7\ntxout: 0\n','2017-11-09 15:48:07'),(36,'Deposit',7,'update',NULL,'---\nid: 7\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: d87d482666c03c6b8ffc71283db1886cb9e3629b0a43ae9ab34948bec39afdac\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:47:03.000000000 Z\nupdated_at: 2017-11-09 06:48:07.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 7\ntxout: 0\n','2017-11-09 15:48:07'),(37,'Deposit',8,'update',NULL,'---\nid: 8\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 5c9f29f74e3d09863050147858d9c1fdf4d25472144e4c31e83f9d30f820066a\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:47:08.000000000 Z\nupdated_at: 2017-11-09 06:47:08.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 8\ntxout: 0\n','2017-11-09 15:48:07'),(38,'Deposit',8,'update',NULL,'---\nid: 8\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 5c9f29f74e3d09863050147858d9c1fdf4d25472144e4c31e83f9d30f820066a\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:47:08.000000000 Z\nupdated_at: 2017-11-09 06:48:07.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 8\ntxout: 0\n','2017-11-09 15:48:07'),(39,'Deposit',9,'update',NULL,'---\nid: 9\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: fd0ead5fce445ffc9d49d0745d868f211c868751cbe2c794aa3cd20286379662\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:47:13.000000000 Z\nupdated_at: 2017-11-09 06:47:13.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 9\ntxout: 0\n','2017-11-09 15:48:07'),(40,'Deposit',9,'update',NULL,'---\nid: 9\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: fd0ead5fce445ffc9d49d0745d868f211c868751cbe2c794aa3cd20286379662\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:47:13.000000000 Z\nupdated_at: 2017-11-09 06:48:07.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 9\ntxout: 0\n','2017-11-09 15:48:07'),(41,'Deposit',10,'update',NULL,'---\nid: 10\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: a045200ad5bde5c20cd23b3d60f9b489cc8834bfaa5c165f5094c07e5b90f9fe\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:47:19.000000000 Z\nupdated_at: 2017-11-09 06:47:19.000000000 Z\ndone_at: \nconfirmations: \'0\'\ntype: Deposits::Satoshi\npayment_transaction_id: 10\ntxout: 0\n','2017-11-09 15:48:07'),(42,'Deposit',10,'update',NULL,'---\nid: 10\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: a045200ad5bde5c20cd23b3d60f9b489cc8834bfaa5c165f5094c07e5b90f9fe\nstate: \naasm_state: submitted\ncreated_at: 2017-11-09 06:47:19.000000000 Z\nupdated_at: 2017-11-09 06:48:07.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 10\ntxout: 0\n','2017-11-09 15:48:07'),(43,'Deposit',7,'update',NULL,'---\nid: 7\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: d87d482666c03c6b8ffc71283db1886cb9e3629b0a43ae9ab34948bec39afdac\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:47:03.000000000 Z\nupdated_at: 2017-11-09 06:48:07.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 7\ntxout: 0\n','2017-11-09 15:48:12'),(44,'Deposit',8,'update',NULL,'---\nid: 8\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 5c9f29f74e3d09863050147858d9c1fdf4d25472144e4c31e83f9d30f820066a\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:47:08.000000000 Z\nupdated_at: 2017-11-09 06:48:07.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 8\ntxout: 0\n','2017-11-09 15:48:12'),(45,'Deposit',9,'update',NULL,'---\nid: 9\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: fd0ead5fce445ffc9d49d0745d868f211c868751cbe2c794aa3cd20286379662\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:47:13.000000000 Z\nupdated_at: 2017-11-09 06:48:07.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 9\ntxout: 0\n','2017-11-09 15:48:12'),(46,'Deposit',10,'update',NULL,'---\nid: 10\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: a045200ad5bde5c20cd23b3d60f9b489cc8834bfaa5c165f5094c07e5b90f9fe\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:47:19.000000000 Z\nupdated_at: 2017-11-09 06:48:07.000000000 Z\ndone_at: \nconfirmations: \'1\'\ntype: Deposits::Satoshi\npayment_transaction_id: 10\ntxout: 0\n','2017-11-09 15:48:12'),(47,'Deposit',7,'update',NULL,'---\nid: 7\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: d87d482666c03c6b8ffc71283db1886cb9e3629b0a43ae9ab34948bec39afdac\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:47:03.000000000 Z\nupdated_at: 2017-11-09 06:48:12.000000000 Z\ndone_at: \nconfirmations: \'2\'\ntype: Deposits::Satoshi\npayment_transaction_id: 7\ntxout: 0\n','2017-11-09 15:49:43'),(48,'Deposit',8,'update',NULL,'---\nid: 8\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: 5c9f29f74e3d09863050147858d9c1fdf4d25472144e4c31e83f9d30f820066a\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:47:08.000000000 Z\nupdated_at: 2017-11-09 06:48:12.000000000 Z\ndone_at: \nconfirmations: \'2\'\ntype: Deposits::Satoshi\npayment_transaction_id: 8\ntxout: 0\n','2017-11-09 15:49:43'),(49,'Deposit',9,'update',NULL,'---\nid: 9\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: fd0ead5fce445ffc9d49d0745d868f211c868751cbe2c794aa3cd20286379662\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:47:13.000000000 Z\nupdated_at: 2017-11-09 06:48:12.000000000 Z\ndone_at: \nconfirmations: \'2\'\ntype: Deposits::Satoshi\npayment_transaction_id: 9\ntxout: 0\n','2017-11-09 15:49:43'),(50,'Deposit',10,'update',NULL,'---\nid: 10\naccount_id: 2\nmember_id: 1\ncurrency: 2\namount: 0.000055\nfee: 0.0\nfund_uid: \nfund_extra: \ntxid: a045200ad5bde5c20cd23b3d60f9b489cc8834bfaa5c165f5094c07e5b90f9fe\nstate: \naasm_state: accepted\ncreated_at: 2017-11-09 06:47:19.000000000 Z\nupdated_at: 2017-11-09 06:48:12.000000000 Z\ndone_at: \nconfirmations: \'2\'\ntype: Deposits::Satoshi\npayment_transaction_id: 10\ntxout: 0\n','2017-11-09 15:49:43');
/*!40000 ALTER TABLE `versions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `withdraws`
--

LOCK TABLES `withdraws` WRITE;
/*!40000 ALTER TABLE `withdraws` DISABLE KEYS */;
/*!40000 ALTER TABLE `withdraws` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-01-08 12:28:17
