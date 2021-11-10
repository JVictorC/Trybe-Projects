CREATE VIEW cancoes_premium AS
SELECT 
	C.nome AS `nome`,
    COUNT(H.id_cancao) AS `reproducoes`
FROM
    SpotifyClone.Usuario AS U
JOIN SpotifyClone.Historico AS H 
ON H.id_usuario = U.id_usuario
JOIN SpotifyClone.Canção AS C
ON C.id_cancao = H.id_cancao
WHERE U.id_plano != 1
GROUP BY `nome`
ORDER BY `nome`;
