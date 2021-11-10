
CREATE VIEW top_2_hits_do_momento AS
SELECT 
    CA.nome AS `cancao`,
    COUNT(HI.id_cancao) AS `reproducoes`
FROM
    SpotifyClone.Historico AS HI
JOIN SpotifyClone.Canção AS CA
ON CA.id_cancao = HI.id_cancao
GROUP BY `cancao`
ORDER BY `reproducoes` DESC, `cancao`
LIMIT 2;
