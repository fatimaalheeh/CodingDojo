select cities.name, cities.population
from cities join countries 
on countries.id=cities.country_id
where countries.name ='Mexico' and cities.population > 500000
order by population desc