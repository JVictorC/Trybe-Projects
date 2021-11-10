USE hr
DELIMITER $$

CREATE PROCEDURE exibir_historico_completo_por_funcionario(IN email VARCHAR(100))
BEGIN
SELECT 
CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME) AS `Nome completo`,
D.DEPARTMENT_NAME AS `Departamento`,
J.JOB_TITLE AS `Cargo`
FROM hr.employees AS E
JOIN hr.job_history AS H
ON H.EMPLOYEE_ID = E.EMPLOYEE_ID
JOIN hr.departments AS D
On H.DEPARTMENT_ID = D.DEPARTMENT_ID
JOIN hr.jobs AS J
ON H.JOB_ID = J.JOB_ID
WHERE E.EMAIL = email
ORDER BY JOB_TITLE;
END $$
DELIMITER ;
