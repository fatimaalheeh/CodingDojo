SELECT 
    clients.client_id,
    COUNT(sites.site_id) AS sites_created,
    extract(MONTH from sites.created_datetime) AS 'month',
    extract(YEAR from sites.created_datetime) AS 'year'
FROM clients JOIN sites ON clients.client_id = sites.client_id
where clients.client_id = 1        
GROUP BY MONTH(sites.created_datetime) , YEAR(sites.created_datetime) -- something goes wrong without group by month
ORDER BY MONTH(sites.created_datetime) ASC;