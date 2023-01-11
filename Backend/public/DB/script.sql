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
    ('Areli Muñoz Lozano','Amado Nervo 19, San Antonio, Tultitlán, Estado de México',5516882078,5537375678,'munoz_lozano1512@hotmail.com',1234);

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
	('Churchs chikens', 'Sociedad Anonima', '8023 West Ln, Stockton, CA 95210, United States', 'Alimentos');
INSERT INTO Area (idNegocio, nombre) VALUES
    (1, 'Capital Humano'), (1, 'Control de Calidad'), (1, 'Cocina'), (1, 'Recepción'), (1, 'Contaduria'),
    (2, 'Capital Humano'), (2, 'Control de Calidad'), (2, 'Cocina'), (2, 'Recepción'), (2, 'Contaduria'),
    (3, 'Capital Humano'), (3, 'Control de Calidad'), (3, 'Cocina'), (3, 'Recepción'), (3, 'Contaduria'),
    (4, 'Capital Humano'), (4, 'Control de Calidad'), (4, 'Cocina'), (4, 'Recepción'), (4, 'Contaduria');

INSERT INTO Gestor_Negocio VALUES
    (1, 1),
    (2, 2),
    (3, 2),
    (4, 3),
    (5, 4);

INSERT INTO Area_Empleado VALUES
    (1, 1), (2, 2), (1, 3), (3, 4), (4, 5);

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
