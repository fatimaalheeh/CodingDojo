SELECT film.film_id, film.title, actor.actor_id, actor.first_name, actor.last_name
FROM film JOIN film_actor JOIN actor
on film_actor.film_id=film.film_id and film_actor.actor_id= actor.actor_id
where film_actor.film_id=369