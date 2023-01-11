/* 
This sql stands for MariaDB

Comando para usar la base de datos
>>cd c:\xampp\mysql\bin
>>.\mysql.exe -u root --password

Las foreign key tiene un esquema diferente en MariaDB
*/

create database if not exists nom035;

use nom035;

create table if not exists Usuario (
	idUsuario integer(10) unsigned auto_increment primary key,
	nombre varchar(50) not null default '',
	domicilio varchar(200) not null default '',
	numCelular varchar(10) unique not null default '',
	numCasa varchar(10) not null default '',
	correoE varchar(50) unique not null default '',
	contrasena varchar(255) not null default ''
);

create table if not exists Gestor (
	idGestor integer(10) unsigned auto_increment primary key,
	idUsuario integer(10) unsigned,
	foreign key (idUsuario) references Usuario(idUsuario) 
	on delete cascade 
	on update cascade
);

create table if not exists Administrador (
	idAdministrador integer(10) unsigned auto_increment primary key,
	idUsuario integer(10) unsigned, 
	foreign key (idUsuario) references Usuario(idUsuario) 
	on delete cascade 
	on update cascade
);

create table if not exists Empleado (
	idEmpleado integer(10) unsigned auto_increment primary key,
	idUsuario integer(10) unsigned,
	foreign key (idUsuario)references Usuario(idUsuario) 
	on delete cascade 
	on update cascade
);

create table if not exists Negocio (idNegocio integer(10) unsigned auto_increment primary key,
	nombre varchar(50) not null default '',
	razonSocial varchar(50) not null default '',
	domicilio varchar(200) unique not null default '',
	actividad varchar(50) not null default ''
);

create table if not exists Area (idArea integer(10) unsigned auto_increment primary key,
	idNegocio integer(10) unsigned,
	foreign key (idNegocio) references Negocio(idNegocio) on delete cascade 
	on update cascade,
	nombre varchar(50) not null default ''
);


create table if not exists Cuestionario (idCuestionario integer(10) unsigned auto_increment primary key,
	fechaApertura date not null,
	fechaCierre date not null,
	resultadoFinal integer(3) not null default 0,
	ambiente integer(2) not null default 0,
	factores integer(2) not null default 0,
	organizacion integer(2) not null default 0,
	liderazgo integer(3) not null default 0,
	condicionesAmb integer(2) not null default 0,
	cantidadTra integer(2) not null default 0,
	esfuerzoMen integer(2) not null default 0,
	actividadesRes integer(2) not null default 0,
	decisiones integer(2) not null default 0,
	jornada integer(2) not null default 0,
	cambios integer(2) not null default 0,
	capacitacion integer(2) not null default 0,
	contacto integer(2) not null default 0,
	relaciones integer(2) not null default 0,
	reconocimiento integer(2) not null default 0,
	violencia integer(2) not null default 0
);

create table if not exists Reporte (idReporte integer(10) unsigned auto_increment primary key,
	fecha date not null,
	archivo blob
);

create table if not exists Asistencia (idSolicitud integer(10) unsigned auto_increment primary key,
	fechaSolicitud date not null,
	fechaUltimaCita date not null,
	duracion integer(10) not null
);

create table if not exists Post(idPost integer(10) unsigned auto_increment primary key,
	titulo varchar(50) not null default '',
	tipo varchar(50) not null default '',
	mensaje varchar(300) not null default '',
	archivo blob,
	fecha date not null
);

create table if not exists Comentario(idComentario integer(10) unsigned auto_increment primary key,
	idUsuario integer(10) unsigned,
	foreign key (idUsuario) references Usuario(idUsuario) on delete cascade 
	on update cascade,
	idPost integer(10) unsigned,
	foreign key (idPost) references Post(idPost) on delete cascade 
	on update cascade,
	mensaje varchar(300) not null default '',
	fecha date not null
);

create table if not exists Buzon(idQueja integer(10) unsigned auto_increment primary key,
	idGestor integer(10) unsigned,
	foreign key (idGestor) references Gestor(idGestor) on delete cascade 
	on update cascade,
	idEmpleado integer(10) unsigned,
	foreign key (idEmpleado) references Empleado(idEmpleado) on delete cascade 
	on update cascade
);

create table if not exists Mensaje_Buzon(idMensaje integer(20) unsigned auto_increment primary key,
	idQueja integer(10) unsigned,
	foreign key (idQueja) references Buzon(idQueja) on delete cascade 
	on update cascade,
	mensaje varchar(300) not null default ''
);

create table if not exists Gestor_Negocio (idGestor integer(10) unsigned,
 	foreign key (idGestor) references Gestor(idGestor) 
	on delete cascade 
	on update cascade,
	idNegocio integer(10) unsigned,
	foreign key (idNegocio) references Negocio(idNegocio) 
	on delete cascade 
	on update cascade,
	primary key(idGestor, idNegocio)
);

create table if not exists Area_Empleado (idArea integer(10) unsigned, 
	foreign key (idArea) references Area(idArea) 
	on delete cascade 
	on update cascade,
	idEmpleado integer(10) unsigned, 
	foreign key (idEmpleado) references Empleado(idEmpleado) 
	on delete cascade
	on update cascade,
	primary key(idArea, idEmpleado)
);

create table if not exists Empleado_Cuestionario (idEmpleado integer(10) unsigned, 
	foreign key (idEmpleado) references Empleado(idEmpleado) 
	on delete cascade 
	on update cascade,
	idCuestionario integer(10) unsigned, 
	foreign key (idCuestionario) references Cuestionario(idCuestionario) 
	on delete cascade 
	on update cascade,
	identificado bit not null default 0,
	primary key(idEmpleado, idCuestionario)
);

create table if not exists Negocio_Cuestionario (idNegocio integer(10) unsigned, 
	foreign key (idNegocio) references Negocio(idNegocio) 
	on delete cascade 
	on update cascade,
	idCuestionario integer(10) unsigned, 
	foreign key (idCuestionario) references Cuestionario(idCuestionario) 
	on delete cascade 
	on update cascade,
	identificado bit not null default 0,
	primary key(idNegocio, idCuestionario)
);

create table if not exists Administrador_Reporte (idAdministrador integer(10) unsigned,
	foreign key (idAdministrador) references Administrador(idAdministrador) 
	on delete cascade 
	on update cascade,
	idReporte integer(10) unsigned, 
	foreign key (idReporte) references Reporte(idReporte) 
	on delete cascade 
	on update cascade,
	fecha date not null,
	primary key(idAdministrador, idReporte)
);

create table if not exists Empleado_Asistencia (idEmpleado integer(10) unsigned,
 	foreign key (idEmpleado) references Empleado(idEmpleado) 
	on delete cascade 
	on update cascade,
	idSolicitud integer(10) unsigned,
	foreign key (idSolicitud) references Asistencia(idSolicitud) 
	on delete cascade 
	on update cascade,
	primary key(idEmpleado, idSolicitud)
);

INSERT INTO Usuario (nombre, domicilio, numCelular, numCasa, correoE, contrasena) VALUES
    ('Sergio Alejandro Cañas Serrano','Oroya 713, Lindavista, Gustavo A. Madero, Ciudad de México',5512345678,5512145678,'scanass1500@alumno.ipn.mx',1234),
    ('Alejandro Marténez Rodríguez','Oroya 713, Lindavista, Gustavo A. Madero, Ciudad de México',5512356678,5512145678,'amartinez1506@alumno.ipn.mx',1234),
    ('Luis Fernando Ramírez Cotonieto','Oroya 713, Lindavista, Gustavo A. Madero, Ciudad de México',5512655678,5512145678,'lramirezc1602@alumno.ipn.mx',1234),
    ('Alejandro Cañas Serrano','Oroya 713, Lindavista, Gustavo A. Madero, Ciudad de México',5523456781,5523451781,'correodummie2@dum.com',1234),
    ('Sergio Alejandro Serrano Cañas','Oroya 713, Lindavista, Gustavo A. Madero, Ciudad de México',5534567812,5534567112,'correodummie3@dum.com',1234),
    ('Alejandro Serrano Cañas','Oroya 713, Lindavista, Gustavo A. Madero, Ciudad de México',5545678122,5545678123,'correodummie4@dum.com',1234),
    ('Hector Martinez Chanes','Oroya 715, Lindavista, Gustavo A. Madero, Ciudad de México',5512345988,5535145678,'hmc_martinez00@gmail.com',1234),
    ('Edwin Oloño Garcia','Quintana Roo 13, San Pablo, Tultitlán, Estado de México',5552445678,5517895678,'edwinog11@gmail.com',1234),
    ('Ana Reyes Silva','Pisco 23, San Pablo, Tultitlán, Estado de México',5552448778,5517836678,'anaresyes_esime@gmail.com',1234),
    ('Mitzi Vite Hernandez','Olivo S/N, Río Alto, Cuahutepec, Estado de México',5552442078,5520395678,'vite_hdz1507@hotmail.com',1234),
    ('Areli Muñoz Lozano','Amado Nervo 19, San Antonio, Tultitlán, Estado de México',5516882078,5537375678,'munoz_lozano1512@hotmail.com',1234),
	('Adriana Berenice Celis Domínguez', 'Av. Juan de Dios Bátiz s/n esq. Av. Miguel Othón de Mendizabal. Colonia Lindavista. Alcaldia: Gustavo A. Madero. C. P. 07738. Ciudad de México', 5578854600, 5578854600, 'bcelisd@ipn.mx', 1234);

INSERT INTO Gestor (idUsuario) VALUES
    (2), (3), (4), (5), (6);

INSERT INTO Administrador (idUsuario) VALUES
    (1);

INSERT INTO Empleado (idUsuario) VALUES
    (7), (8), (9), (10), (11);

INSERT INTO Negocio (nombre, razonSocial, domicilio, actividad) VALUES
    ('Juguitos y Refrescos Felices', 'Sociedad Cooperativa', 'Oroya 713, Lindavista, Gustavo A. Madero, Ciudad de México', 'Alimentos'),
	('Mariscos el paso', 'Socidad Anonima', 'Av. Nader Sm 3 M2 L6 Cancún, México, Cancún 77500 México', 'Alimentos'),
	('Taco Bell','Sociedad Anonima','5200 CA-1, Pacifica, CA 94044, United States', 'Alimentos'),
	('Churchs chikens', 'Sociedad Anonima', '8023 West Ln, Stockton, CA 95210, United States', 'Alimentos')
	('Escuela Superior de Cómputo', '', 'Av. Juan de Dios Bátiz s/n esq. Av. Miguel Othón de Mendizabal. Colonia Lindavista. Alcaldia: Gustavo A. Madero. C. P. 07738. Ciudad de México', 'Educación');
INSERT INTO Area (idNegocio, nombre) VALUES
    (1, 'Capital Humano'), (1, 'Control de Calidad'), (1, 'Cocina'), (1, 'Recepción'), (1, 'Contaduria'),
    (2, 'Capital Humano'), (2, 'Control de Calidad'), (2, 'Cocina'), (2, 'Recepción'), (2, 'Contaduria'),
    (3, 'Capital Humano'), (3, 'Control de Calidad'), (3, 'Cocina'), (3, 'Recepción'), (3, 'Contaduria'),
    (4, 'Capital Humano'), (4, 'Control de Calidad'), (4, 'Cocina'), (4, 'Recepción'), (4, 'Contaduria')
	(5, 'Docentes');

INSERT INTO Gestor_Negocio VALUES
    (1, 1),
    (2, 2),
    (3, 2),
    (4, 3),
    (5, 4),
	(12, 5);

INSERT INTO Area_Empleado VALUES
    (1, 1), (2, 2), (1, 3), (3, 4), (4, 5);


INSERT INTO Cuestionario VALUES (1,'2022-04-01','2022-04-30',73,9,23,5,36,9,7,7,4,5,5,6,5,10,0,10,5),
	(2,'2022-04-01','2022-04-30',112,14,29,12,57,14,7,8,4,10,12,5,13,16,3,8,12),
	(3,'2022-04-01','2022-04-30',63,5,20,7,31,5,6,4,2,8,7,3,4,7,5,6,6),
	(4,'2022-04-01','2022-04-30',83,7,24,11,41,7,9,6,2,7,11,4,2,6,8,12,9),
	(5,'2022-04-01','2022-04-30',107,12,22,7,66,12,5,8,4,5,7,6,9,14,12,8,17),
	(6,'2022-04-01','2022-04-30',48,7,11,6,24,7,5,2,1,3,6,3,4,0,5,3,9),
	(7,'2022-04-01','2022-04-30',129,14,20,13,82,14,6,7,6,1,13,7,15,22,8,10,20),
	(8,'2022-04-01','2022-04-30',97,10,30,12,45,10,6,7,4,13,12,4,5,18,1,13,4),
	(9,'2022-04-01','2022-04-30',115,16,24,15,60,16,8,8,3,5,15,5,7,11,3,4,30),
	(10,'2022-04-01','2022-04-30',101,10,26,16,49,10,8,8,4,6,16,4,10,15,5,6,9),
	(11,'2022-04-01','2022-04-30',119,17,27,8,67,17,8,6,6,7,8,6,6,15,12,19,9),
	(12,'2022-04-01','2022-04-30',95,11,22,11,51,11,7,8,4,3,11,5,7,14,6,7,12),
	(13,'2022-04-01','2022-04-30',70,15,15,9,31,15,8,6,0,1,9,3,7,8,2,5,6),
	(14,'2022-04-01','2022-04-30',83,9,21,7,46,9,7,6,2,6,7,4,7,11,6,9,9),
	(15,'2022-04-01','2022-04-30',138,16,25,8,89,16,6,6,5,8,8,5,15,18,15,19,17),
	(16,'2022-04-01','2022-04-30',49,9,22,7,11,9,9,8,1,4,7,2,4,0,0,0,5),
	(17,'2022-04-01','2022-04-30',80,12,16,6,46,12,4,4,3,5,6,4,8,12,5,9,8),
	(18,'2022-04-01','2022-04-30',108,15,22,5,66,15,7,8,2,5,5,3,11,20,9,14,9),
	(19,'2022-04-01','2022-04-30',111,13,20,6,72,13,5,8,0,7,6,4,15,21,10,16,6),
	(20,'2022-04-01','2022-04-30',37,4,10,3,20,4,2,6,0,2,3,0,2,10,0,1,7),
	(21,'2022-04-01','2022-04-30',52,5,17,9,21,5,5,6,2,4,9,2,0,6,5,4,4),
	(22,'2022-04-01','2022-04-30',102,18,24,13,47,18,8,7,2,7,13,7,11,13,0,10,6),
	(23,'2022-04-01','2022-04-30',93,12,26,8,47,12,6,6,4,10,8,4,10,9,6,8,10),
	(24,'2022-04-01','2022-04-30',42,7,9,2,24,7,2,4,0,3,2,3,5,9,0,1,6),
	(25,'2022-04-01','2022-04-30',100,15,20,8,57,15,5,5,2,8,8,3,6,17,10,10,11),
	(26,'2022-04-01','2022-04-30',123,19,27,8,69,19,9,7,5,6,8,2,17,19,5,13,13),
	(27,'2022-04-01','2022-04-30',56,1,20,9,26,1,6,6,4,4,9,3,2,0,4,8,9),
	(28,'2022-04-01','2022-04-30',59,8,16,6,29,8,7,7,0,2,6,2,5,16,0,1,5),
	(29,'2022-04-01','2022-04-30',82,10,22,11,39,10,6,6,3,7,11,3,6,7,5,9,9),
	(30,'2022-04-01','2022-04-30',86,15,17,5,49,15,4,8,1,4,5,4,13,14,3,8,7),
	(31,'2022-04-01','2022-04-30',126,14,25,16,71,14,7,6,2,10,16,7,15,12,5,15,17),
	(32,'2022-04-01','2022-04-30',101,11,29,7,54,11,8,7,5,9,7,4,11,11,12,2,14),
	(33,'2022-04-01','2022-04-30',97,15,26,17,39,15,8,8,5,5,17,6,6,2,5,1,19),
	(34,'2022-04-01','2022-04-30',85,10,20,12,43,10,6,7,4,3,12,5,7,5,5,12,9),
	(35,'2022-04-01','2022-04-30',100,3,25,11,61,3,6,6,4,9,11,4,13,17,2,16,9),
	(36,'2022-04-01','2022-04-30',82,6,23,13,40,6,9,5,4,5,13,3,3,18,4,8,4),
	(37,'2022-04-01','2022-04-30',75,8,16,4,47,8,4,5,2,5,4,3,10,12,5,10,7),
	(38,'2022-04-01','2022-04-30',99,10,22,7,60,10,5,6,4,7,7,4,11,14,7,13,11),
	(39,'2022-04-01','2022-04-30',101,5,18,4,74,5,3,5,5,5,4,6,15,23,12,10,8),
	(40,'2022-04-01','2022-04-30',99,11,27,15,46,11,10,8,4,5,15,5,5,7,4,14,11),
	(41,'2022-04-01','2022-04-30',119,11,29,17,62,11,11,3,4,11,17,3,12,14,3,16,14),
	(42,'2022-04-01','2022-04-30',90,11,22,9,49,11,6,6,3,8,9,4,8,12,5,9,10);

INSERT INTO Negocio_Cuestionario VALUES (5, 42, 0);

/* ********************************************************************************** */
/* Consultas a la base de datos, no cpoiar para crear la base de datos */
/* ********************************************************************************** */

/* Consulta para obtener los gestores de un negocio en particular */
select 
  usuario.nombre
from
  gestor
  inner join gestor_negocio on gestor.idgestor = gestor_negocio.idgestor
  inner join usuario using (idusuario)
where
  gestor_negocio.idNegocio = "1";

/* Cosnulta para obtener TODOS los gestores  */

select 
  usuario.nombre
from
  gestor
  inner join gestor_negocio on gestor.idgestor = gestor_negocio.idgestor
  inner join usuario using (idusuario)
where
  gestor_negocio.idNegocio = "1";


/* Consulta para obtener el negocio de un gestor */

select
	negocio.nombre, negocio.razonsocial, negocio.domicilio, negocio.actividad
from
	gestor
	inner join gestor_negocio on gestor.idgestor = gestor_negocio.idgestor
	inner join negocio using (idnegocio)
where 
	gestor.idusuario="2";
	
/* Consulta para saber los empleados que trabajan en un negocio */

select	
	usuario.nombre
from
	Area
inner join area_empleado using (idArea)
inner join empleado using (idempleado)
inner join usuario using (idusuario)
where
	area.idnegocio='1';

/* Consulta opara obtener el tipo de usuario de unempleado */

delimiter // 

create function getUsuario2 (idusuario1 varchar(12))
returns varchar(30)
begin
	if exists(select * from gestor where idusuario=idusuario1)then
		return "Gestor";
	elseif exists(select * from empleado where idusuario=idusuario1)then
		return "Empleado";
	else
		return "Admin";
	end if;
end;
//
delimiter;



DELIMITER //

CREATE function simpleproc5 (param1 INT)
returns int
 BEGIN
  if exists(SELECT * FROM usuario where idusuario=param1)then
  return 1;
  end if;
 END;
//

DELIMITER ;

/* Consulta pra obtener el id de negocio */

select 
	negocio.idnegocio
from
	Gestor
inner join gestor_negocio using (idgestor)
inner join negocio using (idnegocio)
where
	gestor.idusuario=12;


/*  */

select	
	*
from Negocio_Cuestionario
inner join cuestionario using (idcuestionario)
where
	negocio_cuestionario.idnegocio="5";
