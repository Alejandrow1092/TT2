/* 
This sql stands for MariaDB

Comando para usar la base de datos
>>cd c:\xampp\mysql\bin
>>.\mysql.exe -u root --password

Las foreign key tiene un esquema diferente en MariaDB


*/

create database if not exists nom035;

use nom035;

create table if not exists Usuario (idUsuario integer(10) unsigned auto_increment primary key,
	nombre varchar(50) not null default '',
	domicilio varchar(200) not null default '',
	numCelular varchar(10) unique not null default '',
	numCasa varchar(10) not null default '',
	correoE varchar(50) unique not null default '',
	contrasena varchar(255) not null default ''
);

create table if not exists Gestor (idGestor integer(10) unsigned auto_increment primary key,
	idUsuario integer(10) unsigned,
	foreign key (idUsuario) references Usuario(idUsuario) 
	on delete cascade 
	on update cascade
);

create table if not exists Administrador (idAdministrador integer(10) unsigned auto_increment primary key,
	idUsuario integer(10) unsigned, 
	foreign key (idUsuario) references Usuario(idUsuario) 
	on delete cascade 
	on update cascade
);

create table if not exists Empleado (idEmpleado integer(10) unsigned auto_increment primary key,
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
	foreign key (idNegocio) references Usuario(idUsuario) on delete cascade 
	on update cascade,
	nombre varchar(50) not null default ''
);


create table if not exists Cuestionario (idCuestionario integer(10) unsigned auto_increment primary key,
	fechaApertura date not null,
	fechaCierre date not null
);

create table if not exists Reporte (idReporte integer(10) unsigned auto_increment primary key,
	fecha date not null
);

create table if not exists Asistencia (idSolicitud integer(10) unsigned auto_increment primary key,
	fechaSolicitud date not null,
	fechaUltimaCita date not null,
	duracion integer(10) not null
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
    ('Sergio Alejandro Cañas Serrano','Oroya 713, Lindavista, Gustavo A. Madero, Ciudad de México',5512345678,5512145678,'correodummie1@dum.com',1234),
    ('Alejandro Cañas Serrano','Oroya 713, Lindavista, Gustavo A. Madero, Ciudad de México',5523456781,5523451781,'correodummie2@dum.com',1234),
    ('Sergio Alejandro Serrano Cañas','Oroya 713, Lindavista, Gustavo A. Madero, Ciudad de México',5534567812,5534567112,'correodummie3@dum.com',1234),
    ('Alejandro Serrano Cañas','Oroya 713, Lindavista, Gustavo A. Madero, Ciudad de México',5545678122,5545678123,'correodummie4@dum.com',1234);

INSERT INTO Gestor (idUsuario) VALUES
    (2);

INSERT INTO Administrador (idUsuario) VALUES
    (1);

INSERT INTO Empleado (idUsuario) VALUES
    (3), (4);

INSERT INTO Negocio (nombre, razonSocial, domicilio, actividad) VALUES
    ('Juguitos y Refrescos Felices', 'Sociedad Cooperativa', 'Oroya 713, Lindavista, Gustavo A. Madero, Ciudad de México', 'Alimentos');

INSERT INTO Area (idNegocio, nombre) VALUES
    (1, 'Capital Humano'), (2, 'Control de Calidad');

INSERT INTO Gestor_Negocio VALUES
    (1, 1);

INSERT INTO Area_Empleado VALUES
    (1, 1), (2, 2);