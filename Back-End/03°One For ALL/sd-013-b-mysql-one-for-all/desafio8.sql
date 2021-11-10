DELIMITER $$

CREATE TRIGGER trigger_usuario_delete 
	BEFORE DELETE ON Usuario
	FOR EACH ROW
BEGIN
    DELETE FROM Seguindo
    WHERE id_usuario = OLD.id_usuario;

	  DELETE FROM Historico
    WHERE id_usuario = OLD.id_usuario;
END $$

DELIMITER ;
