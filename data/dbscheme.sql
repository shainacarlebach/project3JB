-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: northwind
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.28-MariaDB

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
-- Table structure for table `school_admin`
--

DROP TABLE IF EXISTS `school_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `school_admin` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `admin_phone` varchar(45) NOT NULL,
  `admin_email` varchar(45) CHARACTER SET big5 NOT NULL,
  `password` varchar(10) NOT NULL,
  `admin_image` varchar(300) NOT NULL,
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`admin_id`),
  KEY `id_user_idx` (`admin_id`),
  KEY `role_id_idx` (`role`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school_admin`
--

LOCK TABLES `school_admin` WRITE;
/*!40000 ALTER TABLE `school_admin` DISABLE KEYS */;
INSERT INTO `school_admin` VALUES (1,'Bill','050-726-4354','bill@codeschool.co.il','@#*0987cod','owner.jpg','Owner'),(2,'Henry','055-345-7890','henry@codeschool.co.il','$@#8765for','manager.jpg','Manager'),(3,'Susan ','054-739-2220','susan@codeschool.co.il','@$%2345sus','sales.jpg','Sales');
/*!40000 ALTER TABLE `school_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `school_courses`
--

DROP TABLE IF EXISTS `school_courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `school_courses` (
  `course_id` int(11) NOT NULL AUTO_INCREMENT,
  `course_name` varchar(45) NOT NULL,
  `course_description` varchar(100) NOT NULL,
  `course_image` varchar(300) NOT NULL,
  PRIMARY KEY (`course_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school_courses`
--

LOCK TABLES `school_courses` WRITE;
/*!40000 ALTER TABLE `school_courses` DISABLE KEYS */;
INSERT INTO `school_courses` VALUES (1,'HTML5','HTML for web developers. ','html.png'),(2,'CSS','CSS format  layout of Webpage','css.png'),(3,'JAVASCRIPT','JavaScript: programming language','javascript.jpg'),(4,'ANGULAR','Angular: platform for web applications  ','angular.png'),(5,'BOOTSTRAP','Build responsive, mobile projects.','bootstrap.jpg');
/*!40000 ALTER TABLE `school_courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `school_relation`
--

DROP TABLE IF EXISTS `school_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `school_relation` (
  `id_student` int(11) NOT NULL,
  `id_course` int(11) NOT NULL,
  KEY `id_student_idx` (`id_student`),
  KEY `id_course_idx` (`id_course`),
  CONSTRAINT `id_course` FOREIGN KEY (`id_course`) REFERENCES `school_courses` (`course_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_student` FOREIGN KEY (`id_student`) REFERENCES `school_students` (`student_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school_relation`
--

LOCK TABLES `school_relation` WRITE;
/*!40000 ALTER TABLE `school_relation` DISABLE KEYS */;
INSERT INTO `school_relation` VALUES (1,5),(2,4),(3,3),(4,2),(5,1);
/*!40000 ALTER TABLE `school_relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `school_students`
--

DROP TABLE IF EXISTS `school_students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `school_students` (
  `student_id` int(11) NOT NULL,
  `student_name` varchar(45) NOT NULL,
  `student_phone` varchar(45) NOT NULL,
  `student_email` varchar(40) NOT NULL,
  `student_image` varchar(300) NOT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school_students`
--

LOCK TABLES `school_students` WRITE;
/*!40000 ALTER TABLE `school_students` DISABLE KEYS */;
INSERT INTO `school_students` VALUES (1,'Shaina ','050-943-0003','schiffs@aisj.co.il','student1.jpg'),(2,'Lee ','054-265-4879','lingl@aisj.co.il','student3.jpg'),(3,'Josh  ','050-456-7890','blakej@aisj.co.il','student2.jpg'),(4,'Nat ','054-739-2200','kayn@aisj.co.il','student4.jpg'),(5,'Judith  ','054-999-7777','judith@aisj.co.il','student5.jpg');
/*!40000 ALTER TABLE `school_students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'northwind'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-02-12 12:23:09
