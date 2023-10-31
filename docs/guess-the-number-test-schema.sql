drop database if exists guess_the_number_test;
create database guess_the_number_test;
use guess_the_number_test;

create table game_results (
id int auto_increment primary key,
player_name varchar(255),
attempts int,
win boolean,
game_date datetime
);

-- Delimiter to create a stored procedure
delimiter //

-- Create a stored procedure to reset the test database
create procedure set_known_good_state()
begin

    delete from game_results;
    alter table game_results auto_increment = 1;

	 insert into game_results (player_name, attempts, win, game_date) values
    ('player1', 3, 1, '2023-10-31 10:00:00'),
    ('player2', 5, 0, '2023-10-31 11:00:00');

end; //

-- Reset the delimiter
delimiter ;