-- Drop Tables

SET foreign_key_checks = 0;
DROP TABLE IF EXISTS dogs;
SET foreign_key_checks = 1;

-- Create Tables

CREATE TABLE dogs (
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(40) NOT NULL, 
    age INT NOT NULL, 
    human VARCHAR(255), -- Specify the length for VARCHAR fields
    description TEXT, -- Separate fields with commas
    address VARCHAR(255),
    neighbourhood VARCHAR(255), -- Specify the length for VARCHAR fields
    PRIMARY KEY (id)
);

CREATE TABLE walks (
    id INT NOT NULL AUTO_INCREMENT,
    volunteer VARCHAR(255),
    date DATETIME NOT NULL,
    dog_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (dog_id) REFERENCES dogs(id) -- Assuming dogs(id) is the primary key of the dogs table
);