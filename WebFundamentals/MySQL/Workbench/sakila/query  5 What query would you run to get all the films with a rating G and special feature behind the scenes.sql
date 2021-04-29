
 select film.title, film.description, film.release_year, film.rating, film.special_features
 from film
 where film.special_features LIKE '%behind the scenes%' and film.rating ='G'