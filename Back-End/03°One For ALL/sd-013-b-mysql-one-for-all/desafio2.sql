CREATE VIEW estatisticas_musicais AS 
SELECT 
COUNT(CA.id_cancao) AS `cancoes`,
COUNT(DISTINCT A.id_artista) AS `artistas`,
COUNT(DISTINCT AB.nome) AS `albuns`
FROM
	SpotifyClone.Album AS AB
JOIN SpotifyClone.Canção AS CA
ON CA.id_album = AB.id_album
JOIN SpotifyClone.Artista AS A
ON A.id_artista = AB.id_artista;
