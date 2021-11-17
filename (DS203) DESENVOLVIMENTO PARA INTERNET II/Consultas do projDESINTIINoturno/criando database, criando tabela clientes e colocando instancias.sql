--create database projDESINTIINoturno

--drop table clientes

--create schema DesInt

CREATE TABLE DesInt.CLIENTES (
  idClie int NOT NULL identity(1,1),
  cpfClie varchar(11) NOT NULL,
  nomeClie varchar(40) NOT NULL,
  dataNiverClie datetime NOT NULL, 
  emailClie varchar(60) NOT NULL,
 PRIMARY KEY(idClie));

INSERT INTO DesInt.CLIENTES VALUES ('11111111111', 'Monica Ferraz',convert(date,'1990-12-04'),'ferraz@ig.com.br');
INSERT INTO DesInt.CLIENTES VALUES ('22222222222', 'Beatriz Segal',convert(date, '1990-10-25'),'bsegal@cotuca.br');
INSERT INTO DesInt.CLIENTES VALUES ('33333333333','Luciana Silva', convert(date,'2000-03-03'),'luvaz@ig.com.br');
INSERT INTO DesInt.CLIENTES VALUES ('66666666666','Anderson Nascimento',convert(date,'1980-08-19'),'nasc@ig.com.br');

select * from DesInt.CLIENTES