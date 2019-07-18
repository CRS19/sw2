CREATE DATABASE  IF NOT EXISTS `bloom` ;
USE `bloom`;


DROP TABLE IF EXISTS `cosmeticos`;

CREATE TABLE `cosmeticos` (
  `idcosmeticos` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(180) ,
  `descripcion` varchar(255) ,
  `imagen` varchar(200) ,
  `creado_en` timestamp default CURRENT_TIMESTAMP ,
  PRIMARY KEY (`idcosmeticos`)
) ENGINE=InnoDB AUTO_INCREMENT=225 DEFAULT CHARSET=latin1;