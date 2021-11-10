(SELECT
Country AS `País`
FROM w3schools.customers)
UNION
(SELECT Country From w3schools.suppliers)
ORDER BY `País`
LIMIT 5;

-- Ref  https://app.betrybe.com/course/back-end/funcoes-sql-joins-e-subqueries/descomplicando-joins-unions-e-subqueries/08d8070d-42a2-42ac-b012-9bb8d94a5eb1/conteudos/790dbbae-2fe6-4c2e-8691-ba7c4541db5f/como-unir-resultados-com-o-union-e-o-union-all/d155e1d3-1b70-4c1e-911b-5c14aa18443a?use_case=side_bar
-- Ref https://github.com/tryber/sd-013-b-mysql-vocabulary-booster/pull/32/files Ajudou muito a entender o que o requisito pedia
