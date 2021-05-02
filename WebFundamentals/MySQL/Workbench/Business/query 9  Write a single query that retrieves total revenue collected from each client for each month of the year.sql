-- without subquery
SELECT clients.client_id, CONCAT(clients.first_name, ' ', clients.last_name) AS 'client_name',
SUM(billing.amount) AS revenue,
MONTH(billing.charged_datetime) AS 'month',
monthname(billing.charged_datetime) AS 'month_name', -- tried DATENAME() but itdidn't work
YEAR(billing.charged_datetime) AS 'year'

FROM clients JOIN billing ON clients.client_id = billing.client_id
GROUP BY clients.client_id , MONTH(billing.charged_datetime)
ORDER BY clients.client_id ASC , MONTH(billing.charged_datetime) ASC , YEAR(billing.charged_datetime) ASC;



-- --with subquery -- Didn't know how...s
-- SELECT 
--    clients.client_id, CONCAT(clients.first_name, ' ', clients.last_name) AS 'client_name',
-- SUM(billing.amount) AS revenue,
-- MONTH(billing.charged_datetime) AS 'month',
-- YEAR(billing.charged_datetime) AS 'year'

-- FROM clients JOIN billing ON clients.client_id = billing.client_id
-- WHERE
--     charged_datetime IN (SELECT 
--            charged_datetime
--         FROM
--              billing
--         WHERE
--             month(billing.charged_datetime) = '1');