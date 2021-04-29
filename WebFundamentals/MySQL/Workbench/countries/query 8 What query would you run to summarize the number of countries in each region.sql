select region, sum(id) as countries_number 
from countries 
group by region
order by countries_number desc
