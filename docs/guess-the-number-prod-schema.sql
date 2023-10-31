drop database if exists guess_the_number;
create database guess_the_number;
use guess_the_number;

create table game_results (
id int auto_increment primary key,
player_name varchar(255),
attempts int,
win boolean,
game_date datetime
);

 insert into game_results (player_name, attempts, win, game_date) values
('player1', 3, 1, '2023-10-31 10:00:00'),
('player2', 5, 0, '2023-10-31 11:00:00');