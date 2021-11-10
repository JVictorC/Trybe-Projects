DELIMITER $$

CREATE PROCEDURE albuns_do_artista (IN nomeArtista VARCHAR(100))
BEGIN
SELECT 
    DISTINCT A.nome AS `artista`,
    AL.nome AS `album`
FROM
    SpotifyClone.Album AS AL
JOIN SpotifyClone.Artista AS A
ON A.id_artista = AL.id_artista
WHERE A.nome = nomeArtista;
END $$

DELIMITER ;