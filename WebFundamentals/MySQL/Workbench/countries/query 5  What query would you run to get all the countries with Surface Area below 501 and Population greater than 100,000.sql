 
 select countries.name, countries.surface_area
 from countries join cities
 on countries.id = cities.country_id
 where cities.population > 100000 and countries.surface_area< 501
 group by countries.id
 order by countries.surface_area
 