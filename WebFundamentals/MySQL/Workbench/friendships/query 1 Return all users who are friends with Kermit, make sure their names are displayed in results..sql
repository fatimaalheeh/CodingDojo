select  users.first_name, users.last_name,user2.first_name as friend_first_name,user2.last_name as friend_last_name
from users join friendships on users.id = friendships.friend_id
left join users as user2 on user2.id=friendships.friend_id
where users.first_name='kermit'
group by users.id