SELECT count(friendships.friend_id),users.first_name,users.last_name,user2.first_name,user2.last_name 
FROM users JOIN friendships ON users.id=friendships.user_id 
LEFT JOIN users as user2 ON user2.id = friendships.friend_id
group by users.id 
order by count(friendships.friend_id) desc
limit 1
