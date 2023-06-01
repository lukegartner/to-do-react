-- Create Database  "weekend-to-do-app"

-- Table structure
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    note VARCHAR(240),
    complete BOOLEAN NOT NULL
);

-- test values
INSERT INTO tasks (title, note, complete)
VALUES ('clean', 'use bleach', false),
       ('homework', 'react to do project', false),
       ('exercise', NULL, true);
    
