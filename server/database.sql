-- CREATE DATABASE IF NOT EXISTS guestlist_database;

--c\ into guestlist_database

CREATE TABLE guestlist(
    guest_id SERIAL PRIMARY KEY,
    guest_names VARCHAR
);

