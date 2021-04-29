select countries.name, languages.language, languages.percentage
from countries join languages
on countries.id = languages.country_id
where languages.percentage >89
ORDER BY languages.percentage DESC;
