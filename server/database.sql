CREATE DATABASE guestlist_database;

--c\ into guestlist_database

CREATE TABLE guestlist(
    guest_id SERIAL PRIMARY KEY,
    guest_name VARCHAR(50)
);

