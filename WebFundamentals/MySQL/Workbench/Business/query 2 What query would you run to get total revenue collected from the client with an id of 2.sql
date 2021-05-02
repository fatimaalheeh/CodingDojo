SELECT     clients.client_id,
    CONCAT(clients.first_name,' ',clients.last_name) AS client_name,
    SUM(billing.amount) AS revenue
FROM clients JOIN billing ON clients.client_id = billing.client_id 
where clients.client_id = 2
GROUP BY client_name;