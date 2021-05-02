SELECT 
    clients.client_id,
    CONCAT(clients.first_name, ' ', clients.last_name) AS 'client_name',
    GROUP_CONCAT('   *',sites.domain_name) AS 'sites'
FROM clients LEFT JOIN ssites ON clients.client_id = sites.client_id
GROUP BY clients.client_id;