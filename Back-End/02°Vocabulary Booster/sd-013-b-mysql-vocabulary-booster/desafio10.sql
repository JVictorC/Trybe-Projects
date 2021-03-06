SELECT
P.ProductName AS `Produto`,
MIN(OD.Quantity) AS `Mínima`, 
MAX(OD.Quantity) AS `Máxima`,
ROUND(AVG(OD.Quantity), 2) AS `Média`
FROM w3schools.order_details AS OD
JOIN w3schools.products AS P
ON P.ProductID = OD.ProductID
GROUP BY P.ProductName
HAVING `Média` > 20.00
ORDER BY `Média`, `Produto`;
