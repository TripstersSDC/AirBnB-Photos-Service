DROP DATABASE IF EXISTS airbnb;
CREATE DATABASE airbnb;

\c airbnb;

-- /*create reviews table*/
CREATE TABLE IF NOT EXISTS listings(
  listing_id SERIAL PRIMARY KEY,
  listing_name varchar NOT NULL,
  lising_description varchar NOT NULL
);

/*create properties table*/
CREATE TABLE IF NOT EXISTS photos(
  photos_id SERIAL PRIMARY KEY,
  fklisting_id INTEGER REFERENCES listings(listing_id),
  image_url varchar NOT NULL,
  thumbnail_url varchar NOT NULL,
  photo_description varchar NOT NULL,
  room varchar NOT NULL
);

/*CREATES index for the foreign key in reviews table*/
CREATE INDEX photo_fk_index
ON photos ("fklisting_id" desc);

-- COPY listings(listing_id, listing_name, lising_description)
-- FROM 'data location'
-- DELIMITER ','
-- CSV HEADER;


-- COPY photos(photos_id, fklisting_id, thumbnail_url, image_url, photo_description, room)
-- FROM 'data location'
-- DELIMITER ','
-- CSV HEADER;
