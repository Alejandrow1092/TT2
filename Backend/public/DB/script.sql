create database if not exists nom035;

use nom035;

create table if not exists Usuario (idUsuario integer(10) unsigned auto_increment primary key,
	nombre varchar(50) not null default '',
	domicilio varchar(200) not null default '',
	numCelular varchar(10) unique not null default '',
	numCasa varchar(10) not null default '',
	correoE varchar(50) unique not null default '',
	contraseña varchar(255) not null default ''
);

create table if not exists Gestor (idGestor integer(10) unsigned auto_increment primary key,
	idUsuario integer(10) unsigned foreign key reference Usuario(idUsuario) on delete cascade on update cascade
);

create table if not exists Administrador (idAdministrador integer(10) unsigned auto_increment primary key,
	idUsuario integer(10) unsigned foreign key reference Usuario(idUsuario) on delete cascade on update cascade
);

create table if not exists Empleado (idEmpleado integer(10) unsigned auto_increment primary key,
	idUsuario integer(10) unsigned foreign key reference Usuario(idUsuario) on delete cascade on update cascade
);

create table if not exists Negocio (idNegocio integer(10) unsigned auto_increment primary key,
	nombre varchar(50) not null default '',
	razonSocial varchar(50) not null default '',
	domicilio varchar(200) unique not null default '',
	actividad varchar(50) not null default ''
);

create table if not exists Area (idArea integer(10) unsigned auto_increment primary key,
	idNegocio integer(10) unsigned foreign key reference Usuario(idUsuario) on delete cascade on update cascade,
	nombre varchar(50) not null default ''
);


create table if not exists Cuestionario (idCuestionario integer(10) unsigned auto_increment primary key,
	fechaApertura date not null,
	fechaCierre date not null
)

create table if not exists Reporte (idReporte integer(10) unsigned auto_increment primary key,
	fecha date not null
);

create table if not exists Asistencia (idSolicitud integer(10) unsigned auto_increment primary key,
	fechaSolicitud date not null,
	fechaUltimaCita date not null,
	duracion integer(10) not null
);

create table if not exists Gestor_Negocio (idGestor integer(10) unsigned foreign key reference Gestor(idGestor) on delete cascade on update cascade,
	idNegocio integer(10) unsigned foreign key reference Negocio(idNegocio) on delete cascade on update cascade,
	primary key(idGestor, idNegocio)
);

create table if not exists Area_Empleado (idArea integer(10) unsigned foreign key reference Area(idArea) on delete cascade on update cascade,
	idEmpleado integer(10) unsigned foreign key reference Empleado(idEmpleado) on delete cascade on update cascade,
	primary key(idArea, idEmpleado)
);

create table if not exists Empleado_Cuestionario (idEmpleado integer(10) unsigned foreign key reference Empleado(idEmpleado) on delete cascade on update cascade,
	idCuestionario integer(10) unsigned foreign key reference Cuestionario(idCuestionario) on delete cascade on update cascade,
	identificado bit not null default 0,
	primary key(idEmpleado, idCuestionario)
);

create table if not exists Administrador_Reporte (idAdministrador integer(10) unsigned foreign key reference Administrador(idAdministrador) on delete cascade on update cascade,
	idReporte integer(10) unsigned foreign key reference Reporte(idReporte) on delete cascade on update cascade,
	fecha date not null,
	primary key(idAdministrador, idReporte)
);

create table if not exists Empleado_Asistencia (idEmpleado integer(10) unsigned foreign key reference Empleado(idEmpleado) on delete cascade on update cascade,
	idSolicitud integer(10) unsigned foreign key reference Asistencia(idSolicitud) on delete cascade on update cascade,
	primary key(idEmpleado, idSolicitud)
);