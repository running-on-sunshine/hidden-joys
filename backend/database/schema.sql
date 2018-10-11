CREATE TABLE items (
    id serial PRIMARY KEY,
    title character varying(255),
    lat numeric NOT NULL,
    lng numeric NOT NULL,
    image character varying(255),
    found_code character varying(255),
    item_found BOOLEAN DEFAULT false,
    found_comment text
);

CREATE TABLE hints (
    id serial PRIMARY KEY,
    item_id INTEGER REFERENCES items(id),
    hint character varying(255)
);