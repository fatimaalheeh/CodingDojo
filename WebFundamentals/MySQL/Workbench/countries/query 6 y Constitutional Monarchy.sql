
select countries.name as Country_name,cities.name as City_name, cities.district as District, cities.population as Population
from cities join countries
where countries.name = 'Argentina' and cities.district = 'Buenos Aires'