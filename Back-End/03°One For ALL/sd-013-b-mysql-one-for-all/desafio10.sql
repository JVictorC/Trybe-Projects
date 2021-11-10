DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico (idUser INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE returnValue INT;
SELECT 
    COUNT(*)
FROM
    SpotifyClone.Historico
WHERE id_usuario = idUser
INTO returnValue;

RETURN returnValue;

END $$

DELIMITER ;