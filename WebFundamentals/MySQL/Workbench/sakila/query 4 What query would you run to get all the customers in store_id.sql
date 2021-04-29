
select store.store_id,city.city_id, customer.first_name, customer.last_name, customer.email, address.address, address.address2
from customer join address join city join store
on customer.address_id = address.address_id and address.city_id = city.city_id and customer.store_id = store.store_id
where store.store_id = 1 and( address.city_id =1 or address.city_id = 42 or address.city_id = 312 or address.city_id = 459 )
