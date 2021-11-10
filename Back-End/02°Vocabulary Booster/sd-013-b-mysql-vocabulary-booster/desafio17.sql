USE w3schools
DELIMITER $$

CREATE TRIGGER insertOrderDataInOrders
BEFORE INSERT ON w3schools.orders
FOR EACH ROW
BEGIN
SET NEW.OrderDate = CURRENT_DATE();
END $$
DELIMITER ;
