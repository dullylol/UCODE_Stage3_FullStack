CREATE USER 'odehtiarov'@'localhost' IDENTIFIED WITH mysql_native_password BY 'securepass';
GRANT ALL PRIVILEGES ON * . * TO 'odehtiarov'@'localhost';
FLUSH PRIVILEGES;
CREATE DATABASE ucode_web;
