
SELECT countries.name, languages.language, languages.percentage
FROM languages JOIN countries 
ON countries.id = country_id
where  language ='Slovene'