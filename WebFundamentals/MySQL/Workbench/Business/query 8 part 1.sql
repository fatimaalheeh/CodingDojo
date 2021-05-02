-- Finding how many leads:
-- SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS 'client name',
-- COUNT(leads.leads_id) AS leads,
-- extract( month from leads.registered_datetime) AS 'month'
-- FROM clients LEFT JOIN sites ON clients.client_id = sites.client_id JOIN leads ON sites.site_id = leads.site_id
-- WHERE leads.registered_datetime >= '2011-01-01' AND leads.registered_datetime < '2011-07-01'
-- GROUP BY clients.client_id 
-- ORDER BY clients.client_id DESC;



-- How many leads for each website for each user
SELECT 
clients.client_id,
CONCAT(clients.first_name, ' ', clients.last_name) AS 'client name',
sites.domain_name,
COUNT(leads.leads_id) AS leads
FROM clients LEFT JOIN sites ON clients.client_id = sites.client_id JOIN leads ON sites.site_id = leads.site_id
WHERE leads.registered_datetime >= '2011-01-01'
AND leads.registered_datetime <= '2011-12-31'
GROUP BY sites.domain_name
ORDER BY clients.client_id ASC,leads desc;