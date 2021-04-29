select film.title,film.rating,film.description,film.special_features,film.release_year,category.name as category
from film_category join category join film
where film.film_id = film_category.film_id and film_category.category_id= category.category_id
order by film.release_year desc
