select actor.actor_id,actor.first_name,actor.last_name, film.title, film.description,film.release_year
from actor join film join film_actor
on actor.actor_id=film_actor.actor_id and film_actor.film_id=film.film_id
where actor.actor_id=5
order by film.release_year desc