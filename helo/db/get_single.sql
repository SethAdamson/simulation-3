select posts.id, username, pic, title, img, content from users
join posts on users.id = posts.author_id
where posts.id = $1;