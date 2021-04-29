select users.first_name, users.last_name
from users join friendships on users.id = friendships.friend_id join users as user2 on friendships.user_id = user2.id
where users.first_name = 'Eli'

