SELECT users.first_name as user_name,users.last_name as user_last_name,user2.first_name as friend_name,user2.last_name as friend_last_name
FROM users JOIN friendships ON users.id=friendships.user_id 
LEFT JOIN users as user2 ON user2.id = friendships.friend_id

