CREATE VIEW top_3_artistas AS
SELECT 
    A.nome AS `artista`,
    COUNT(SE.id_usuario) AS `seguidores`
FROM
    SpotifyClone.Seguindo AS SE
JOIN SpotifyClone.Artista AS A
ON SE.id_artista = A.id_artista
GROUP BY A.nome
ORDER BY `seguidores` DESC, `artista`
LIMIT 3;