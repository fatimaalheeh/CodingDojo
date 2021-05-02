SELECT 
    COUNT(leads.leads_id) AS 'leads'
    

FROM sites JOIN leads ON sites.site_id = leads.site_id
WHERE leads.registered_datetime >= '2011-01-01' AND leads.registered_datetime <= '2011-02-15'


-- SELECT 
--     COUNT(leads.leads_id) AS '# of leads',
--     sites.domain_name,
--     leads.registered_datetime
-- FROM sites JOIN leads ON sites.site_id = leads.site_id
-- WHERE leads.registered_datetime >= '2011-01-01' AND leads.registered_datetime <= '2011-02-15'
-- GROUP BY sites.domain_name;