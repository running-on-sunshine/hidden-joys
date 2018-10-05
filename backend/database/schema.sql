CREATE TABLE items (
    id character varying(255) PRIMARY KEY,
    title character varying(255),
    lat numeric NOT NULL,
    lng numeric NOT NULL,
    image character varying(255),
    description character varying(255),
    found BOOLEAN DEFAULT false,
    comment character varying(255)
);