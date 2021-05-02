-- SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS 'client name',
-- COUNT(leads.leads_id) AS leads
-- FROM clients LEFT JOIN sites ON clients.client_id = sites.client_id JOIN leads ON sites.site_id = leads.site_id
-- GROUP BY clients.client_id 
-- ORDER BY leads DESC;

-- How many leads for each website for each user for all times
SELECT 
clients.client_id,
CONCAT(clients.first_name, ' ', clients.last_name) AS 'client name',
sites.domain_name,
COUNT(leads.leads_id) AS leads
FROM clients LEFT JOIN sites ON clients.client_id = sites.client_id JOIN leads ON sites.site_id = leads.site_id
GROUP BY sites.domain_name
ORDER BY clients.client_id ASC,leads desc;