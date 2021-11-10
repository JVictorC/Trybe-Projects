SELECT
CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME) AS `Nome completo`,
DATE_FORMAT(H.START_DATE, "%d/%m/%Y") AS `Data de início`,
DATE_FORMAT(H.END_DATE, "%d/%m/%Y") AS `Data de rescisão`,
ROUND(DATEDIFF(DATE(H.END_DATE), DATE(H.START_DATE)) / 365, 2) AS `Anos trabalhados`
FROM hr.employees AS E
JOIN hr.job_history AS H
ON H.EMPLOYEE_ID = E.EMPLOYEE_ID
ORDER BY `Nome completo`, `Anos trabalhados`;

-- Ref DAte_format https://www.w3schools.com/sql/func_mysql_date_format.asp
