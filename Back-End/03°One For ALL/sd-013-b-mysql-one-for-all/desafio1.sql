CREATE DATABASE IF NOT EXISTS SpotifyClone;

USE SpotifyClone;

CREATE TABLE Plano(
	id_plano INT PRIMARY KEY AUTO_INCREMENT,
    plano VARCHAR(100) NOT NULL,
    valor DOUBLE NOT NULL
);

CREATE TABLE Usuario(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    id_plano INT NOT NULL,
    
    FOREIGN KEY(id_plano) REFERENCES SpotifyClone.Plano(id_plano)
);


CREATE TABLE Artista(
	id_artista INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);


CREATE TABLE Album(
	id_album INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    id_artista INT NOT NULL,
    
    FOREIGN KEY (id_artista) REFERENCES SpotifyClone.Artista(id_artista)
);


CREATE TABLE Canção(
	id_cancao INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    id_album INT NOT NULL,
    FOREIGN KEY (id_album) REFERENCES SpotifyClone.Album(id_album)
);


CREATE TABLE Historico(
	id_usuario INT NOT NULL,
    id_cancao INT NOT NULL,
    
    FOREIGN KEY (id_usuario) REFERENCES SpotifyClone.Usuario(id_usuario),
    FOREIGN KEY (id_cancao) REFERENCES SpotifyClone.Canção(id_cancao),
	CONSTRAINT PRIMARY KEY (id_usuario, id_cancao)
);


CREATE TABLE Seguindo(
	id_artista INT NOT NULL,
    id_usuario INT NOT NULL,

	FOREIGN KEY (id_usuario) REFERENCES SpotifyClone.Usuario(id_usuario),
	FOREIGN KEY (id_artista) REFERENCES SpotifyClone.Artista(id_artista),
	CONSTRAINT PRIMARY KEY (id_usuario, id_artista)
);


INSERT INTO SpotifyClone.Plano (plano, valor)
VALUES
('gratuito', 0),
('familiar', 7.99),
('universitário', 5.99);

INSERT INTO SpotifyClone.Usuario(nome, idade, id_plano)
VALUES
('Thati', 23, 1),
('Cintia', 35, 2),
('Bill', 20, 3),
('Roger', 20, 1);

INSERT INTO SpotifyClone.Artista(nome)
VALUES
('Walter Phoenix'),
('Peter Strong'),
('Lance Day'),
('Freedie Shannon');

INSERT INTO SpotifyClone.Album(nome, id_artista)
VALUES
('Envious', 1),
('Exuberant', 1),
('Hallowed Steam', 2),
('Incandescent', 3),
('Temporary Culture', 4);


INSERT INTO SpotifyClone.Canção(nome, id_album)
VALUES
('Soul For Us', 1),
('Reflections Of Magic', 1),
('Dance With Her Own', 1),
('Troubles Of My Inner Fire', 2),
('Time Fireworks', 2),
('Magic Circus', 3),
('Honey, So Do I', 3),
("Sweetie, Let's Go Wild", 3),
('She Knows', 3),
('Fantasy For Me', 4),
('Celebration Of More', 4),
('Rock His Everything', 4),
('Home Forever', 4),
('Diamond Power', 4),
("Honey, Let's Be Silly", 4),
('Thang Of Thunder', 5),
('Words Of Her Life', 5),
('Without My Streets', 5);

INSERT INTO SpotifyClone.Historico(id_usuario,id_cancao)
VALUES
(1, 1),
(1, 6),
(1, 14),
(1, 16),
(2, 13),
(2, 17),
(2, 2),
(2, 15),
(3, 4),
(3, 16),
(3, 6),
(4, 3),
(4,18),
(4, 11);

INSERT INTO SpotifyClone.Seguindo(id_artista, id_usuario)
VALUES
(1,1),
(4,1),
(3,1),
(1,2),
(3,2),
(2,3),
(1,3),
(4,4);

