USE northwind;

-- create particulars table
SELECT "creating particulars table" AS msg;
CREATE TABLE particulars (
    badge_id VARCHAR(8) NOT NULL,
    name VARCHAR(16) NOT NULL,
    email VARCHAR(16) NOT NULL,

    CONSTRAINT pk_badge_id PRIMARY KEY(badge_id)
);

-- insert values
INSERT INTO particulars (badge_id, name, email) VALUES 
    ("abc123","Jack Neo","jack@abc.com"),
    ("qqw223","Quinn Keon","quinn@abc.com"),
    ("jw45","Jackson Wang","wang@abc.com"),
    ("bp907","Brad Pitt","brad@abc.com"),
    ("rl98","Remus Lum","remus@abc.com");