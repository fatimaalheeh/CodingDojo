select count(friendships.friend_id) as friendships_number
from users join friendships on users.id = friendships.friend_id
left join users as user2 on user2.id=friendships.friend_id
