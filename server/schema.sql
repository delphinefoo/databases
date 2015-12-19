CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  message_id INT,
  roomname varchar(20),
  user varchar(20),
  message_text varchar(140),
  created_at datetime
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  user_id INT,
  username varchar (20)
);

CREATE TABLE rooms (
  room_id INT,
  roomname varchar(20)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

