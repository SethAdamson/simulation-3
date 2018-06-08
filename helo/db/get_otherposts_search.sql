select * from users
join posts on users.id=posts.author_id;
where id != $1 and title like'%$2%';