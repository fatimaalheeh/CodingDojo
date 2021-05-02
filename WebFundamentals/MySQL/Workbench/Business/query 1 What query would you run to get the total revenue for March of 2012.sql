SELECT 
    EXTRACT(month FROM billing.charged_datetime) AS 'month', -- extract (month [year] [day] from)
    SUM(billing.amount) AS revenue
FROM
    billing
WHERE
    billing.charged_datetime >= '2012/03/01'
        AND billing.charged_datetime < '2012/04/01';
