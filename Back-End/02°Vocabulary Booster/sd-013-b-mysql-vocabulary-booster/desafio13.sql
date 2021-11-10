SELECT 
P.ProductName AS `Produto`,
P.Price AS `Preço`
FROM w3schools.products AS P
INNER JOIN w3schools.order_details AS D
ON D.ProductID = P.ProductID
WHERE D.Quantity > 80
ORDER BY `Produto`;
