insert into users(username, password, pic)
values($1, $2, $3)
returning *;