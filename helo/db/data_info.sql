create table users (
    id serial primary key,
    username varchar(20),
    password varchar(20),
    pic text
);

create table posts (
    id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id integer references users(id)
);

insert into users(username, password, pic)
values('test1', 'pass-word', 'http://profile_pic');

insert into posts(title, img, content, author_id)
values('post1', 'http://dog', 'I love dogs!', 1);