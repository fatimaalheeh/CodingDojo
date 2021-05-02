SELECT clients.client_id,
    CONCAT(clients.first_name,' ',clients.last_name) AS client_name,
    sites.domain_name AS domain
FROM clients JOIN sites ON clients.client_id = sites.client_id
where clients.client_id = 10;