DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT,
  password TEXT,
  email TEXT,
  sec_question TEXT,
  sec_answer TEXT
);

DROP TABLE IF EXISTS custom_weapons;

CREATE TABLE custom_weapons (
    id SERIAL PRIMARY KEY,
    name TEXT,
    weapon_type TEXT,
    rarity TEXT,
    attunement BOOLEAN,
    description TEXT,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
)

DROP TABLE IF EXISTS custom_armor;

CREATE TABLE custom_armor (
    id SERIAL PRIMARY KEY,
    name TEXT,
    armor_type TEXT,
    rarity TEXT,
    attunement BOOLEAN,
    description TEXT,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
)

DROP TABLE IF EXISTS custom_wondrous;

CREATE TABLE custom_wondrous (
    id SERIAL PRIMARY KEY,
    name TEXT,
    rarity TEXT,
    attunement BOOLEAN,
    description TEXT,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
)

DROP TABLE IF EXISTS custom_rp_npc;

CREATE TABLE custom_rp_npc (
    id SERIAL PRIMARY KEY,
    name TEXT,
    race TEXT,
    alignment TEXT,
    appearance TEXT,
    mannerism TEXT,
    useful_knowledge TEXT,
    secret TEXT,
    description TEXT,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
)