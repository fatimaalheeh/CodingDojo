delete friendships
FROM users  JOIN friendships ON users.id=friendships.user_id 
LEFT JOIN users as user2 ON user2.id = friendships.friend_id
where users.first_name="Eli" and user2.first_name="Marky"
