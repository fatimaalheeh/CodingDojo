SELECT film.title, film.description, film.release_year, film.rating, 
film.special_features, category.name
FROM film JOIN film_category JOIN category
on film_category.film_id=film.film_id AND film_category.category_id=category.category_id
WHERE film.rental_rate=2.99 and category.name='Drama'