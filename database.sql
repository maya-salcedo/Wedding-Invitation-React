-- CREATE DATABASE IF NOT EXISTS guestlist_database;

--c\ into guestlist_database

CREATE TABLE IF NOT EXISTS weddingguestlist(
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(50),
    phone VARCHAR(50),
    additionalguest VARCHAR(500),
    guestmessage VARCHAR(100),
    response VARCHAR(10)   
);

