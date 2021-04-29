select countries.name, COUNT(cities.name) As citiesnumber
from cities join countries
on countries.id = cities.id
group by country_id --comment: country_code--
order by citiesnumber DESC