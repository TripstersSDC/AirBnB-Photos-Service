DROP DATABASE IF EXISTS airbnb;
CREATE DATABASE airbnb;
/*create properties table*/
CREATE TABLE IF NOT EXISTS photos(
  photos_id SERIAL PRIMARY KEY,
  thumbnail_url varchar NOT NULL,
  image_url varchar NOT NULL,
  photo_description varchar NOT NULL,
  room varchar NOT NULL
);
/*create reviews table*/
CREATE TABLE IF NOT EXISTS listings(
  listing_id SERIAL PRIMARY KEY,
  listing_name varchar NOT NULL,
  lising_description timestamp NOT NULL
);

