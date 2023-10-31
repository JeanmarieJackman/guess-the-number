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