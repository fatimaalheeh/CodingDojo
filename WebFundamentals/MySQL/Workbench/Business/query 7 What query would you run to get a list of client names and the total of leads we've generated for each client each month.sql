SELECT CONCAT(clients.first_name,' ', clients.last_name) AS 'client name',
    COUNT(leads.leads_id) AS 'leads',
    extract(MONTH from leads.registered_datetime) AS 'month' -- MONTH(leads.registered_datetime) instead of extract
FROM clients LEFT JOIN sites ON clients.client_id = sites.client_id JOIN leads ON sites.site_id = leads.site_id
WHERE leads.registered_datetime >= '2011-01-01' AND leads.registered_datetime < '2011-07-01'
GROUP BY clients.client_id , 'month'
ORDER BY  COUNT(leads.leads_id) DESC;