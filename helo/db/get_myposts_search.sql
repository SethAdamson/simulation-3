select * from users
join posts on users.id=posts.author_id
where title like $1;