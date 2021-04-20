CREATE TABLE kioku_users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(25),
  email VARCHAR(80),
  password VARCHAR(40)
);

CREATE TABLE kioku_decks (
  deck_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  user_id INT REFERENCES kioku_users(user_id)
);

CREATE TABLE kioku_flashcards (
  card_id SERIAL PRIMARY KEY,
  card_front TEXT,
  card_back TEXT,
  deck_id INT REFERENCES kioku_decks(deck_id)
);