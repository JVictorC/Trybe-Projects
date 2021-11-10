CREATE VIEW faturamento_atual AS
SELECT 
    CAST(MIN(PL.valor) AS DECIMAL(10,2)) AS `faturamento_minimo`,
    CAST(MAX(PL.valor) AS DECIMAL(10,2))AS `faturamento_maximo`,
	CAST(ROUND(AVG(PL.valor), 2) AS DECIMAL(10,2 )) AS `faturamento_medio`, 
  CAST(SUM(PL.valor) AS DECIMAL(10,2))AS `faturamento_total`
FROM
    SpotifyClone.Plano AS PL
JOIN SpotifyClone.Usuario AS U
ON U.id_plano = PL.id_plano;


-- OBS não entendi o motivo pelo qual so passou com CAST, mas de qualquer formar peguei de referencia do LINK: https://pt.stackoverflow.com/questions/3455/formatar-casas-decimais-diretamente-no-comando-sql-em-firebird && 