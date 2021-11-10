SELECT 
CONCAT(EM.FirstName, ' ', EM.LastName) AS `Nome completo`,
COUNT(O.EmployeeID) AS `Total de pedidos`
FROM w3schools.orders AS O
JOIN w3schools.employees AS EM
ON O.EmployeeID = EM.EmployeeID
GROUP BY `Nome completo`
ORDER BY `Total de pedidos`;
