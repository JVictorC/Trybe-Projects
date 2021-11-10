USE hr
DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email VARCHAR(100))
RETURNS INT DETERMINISTIC
BEGIN
DECLARE qtd_jobs INT;
SELECT COUNT(H.DEPARTMENT_ID) AS `total_empregos` FROM hr.job_history AS H
JOIN hr.employees AS E
ON E.EMPLOYEE_ID = H.EMPLOYEE_ID
WHERE E.EMAIL = email
INTO qtd_jobs;
RETURN qtd_jobs;
END $$
DELIMITER ;
