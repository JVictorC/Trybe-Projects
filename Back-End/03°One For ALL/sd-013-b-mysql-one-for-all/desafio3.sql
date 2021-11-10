CREATE VIEW historico_reproducao_usuarios AS
SELECT 
    US.nome AS `usuario`,
    CA.nome AS `nome`
FROM
    SpotifyClone.Historico AS HI
JOIN SpotifyClone.Usuario AS US
ON US.id_usuario = HI.id_usuario
JOIN SpotifyClone.Canção AS CA
ON CA.id_cancao = HI.id_cancao
ORDER BY `usuario`, `nome`;
