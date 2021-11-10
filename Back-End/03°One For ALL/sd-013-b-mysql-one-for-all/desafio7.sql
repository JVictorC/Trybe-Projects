CREATE VIEW perfil_artistas AS
SELECT 
    A.nome AS `artista`,
    AL.nome AS `album`,
    COUNT(SE.id_usuario) AS `seguidores`
FROM
    SpotifyClone.Artista AS A
JOIN SpotifyClone.Album AS AL
ON AL.id_artista = A.id_artista
JOIN SpotifyClone.Seguindo AS SE
ON SE.id_artista = A.id_artista
GROUP BY A.nome, AL.nome, SE.id_artista
ORDER BY `seguidores` DESC, `artista`, `album`;
