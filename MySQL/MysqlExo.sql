
-- CREATE TABLE edusign (
--     id INTEGER PRIMARY KEY,
--     firstname TEXT NOT NULL,
--     lastname TEXT NOT NULL,
--     email TEXT NOT NULL,
--     created_at DATETIME NOT NULL
-- );

-- CREATE TABLE users (
--     user_id INTEGER PRIMARY KEY,
--     firstname TEXT NOT NULL,
--     lastname TEXT NOT NULL,
--     email TEXT NOT NULL
-- );

-- -- - Add some data to users
-- INSERT INTO users (user_id, firstname, lastname, email) VALUES
--     (1, 'Ada', 'Lovelace', 'ada@test.fr'),
--     (2, 'Beatrice', 'Worsley', 'bea@test.fr'),
--     (3, 'Bella', 'Guerin', 'bella@test.fr'),
--     (4, 'Barbara', 'Chase', 'barbara@test.fr');

-- SELECT *
-- FROM users;
-- SELECT edusign.id, users.user_id, edusign.created_at
-- FROM edusign
-- FULL OUTER JOIN users ON edusign.lastname=users.lastname;



                 -- Niveau Facile

--[1]

-- SELECT *
-- FROM users;

--[2]

-- SELECT *
-- FROM users
-- WHERE firstname = 'Ada';

--[3]

-- SELECT *
-- FROM users
-- WHERE firstname LIKE 'B%';

--[4]

-- SELECT count(*)
-- FROM users;

--[5]

-- SELECT count(*)
-- FROM users
-- WHERE firstname LIKE 'B%';

--[6]

-- SELECT firstname
-- FROM users;

                   -- Niveau Moyen

--[1]

--  INSERT INTO edusign (firstname, lastname, email, created_at) VALUES
--     ('Ada', 'Lovelace', 'ada@test.fr','2024-05-30 09:30:00');

--[2]

--  INSERT INTO edusign (firstname, lastname, email, created_at) VALUES
--     ('Bella', 'Guerin', 'bella@test.fr','2024-05-30 09:30:00');

--[3]

-- SELECT edusign.id, users.user_id, edusign.created_at
-- FROM edusign
-- FULL OUTER JOIN users ON edusign.lastname=users.lastname
-- ALTER TABLE edusign
-- DROP firstname,lastname,email;

-- INSERT INTO edusign (firstname, lastname, created_at) VALUES
-- ('Ada', 'Lovelace','2024-09-01 09:30:00'),
-- ('Beatrice', 'Worsley','2024-09-01 09:30:00'),
-- ('Bella', 'Guerin','2024-09-01 09:30:00'),
-- ('Barbara', 'Chase','2024-09-01 09:30:00');


-- ALTER TABLE edusign ADD COLUMN user_id INTEGER;

-- PRAGMA foreign_keys=off;

-- CREATE TABLE edusign_temp (
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     user_id INTEGER,
--     created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (user_id) REFERENCES users(user_id)
-- );

-- INSERT INTO edusign_temp (id, user_id, created_at)
-- SELECT edusign.id, users.user_id, edusign.created_at
-- FROM edusign
-- JOIN users ON edusign.email = users.email;


-- DROP TABLE edusign;
-- ALTER TABLE edusign_temp RENAME TO edusign;

-- PRAGMA foreign_keys=on;

-- Assuming the users table has records for Ada, Beatrice, Bella, and Barbara
-- Insert data into edusign with the user_id instead of firstname and lastname

-- INSERT INTO edusign (user_id, created_at)
-- VALUES
--     ((SELECT user_id FROM users WHERE firstname = 'Ada' AND lastname = 'Lovelace'), '2024-09-01 09:30:00'),
--     ((SELECT user_id FROM users WHERE firstname = 'Beatrice' AND lastname = 'Worsley'), '2024-09-01 09:30:00'),
--     ((SELECT user_id FROM users WHERE firstname = 'Bella' AND lastname = 'Guerin'), '2024-09-01 09:30:00'),
--     ((SELECT user_id FROM users WHERE firstname = 'Barbara' AND lastname = 'Chase'), '2024-09-01 09:30:00');


SELECT *
FROM edusign;


--[4]

-- SELECT  *
-- FROM edusign
-- ORDER BY created_at DESC;

--[5]

-- SELECT *
-- FROM edusign
-- WHERE created_at = '2024-05-30 09:30:00';

                 -- Niveau Moyen +

--[1]

-- SELECT edusign.created_at, COUNT(*) AS nombre_apprenants
-- FROM edusign
-- GROUP BY edusign.created_at
-- ORDER BY edusign.created_at;

--[2]

-- SELECT *, edusign.user_id = 3 COUNT(*) AS Nombre_de_Bella
-- FROM edusign
-- GROUP BY edusign.created_at
-- ORDER BY edusign.created_at;


-- SELECT edusign.*
-- (SELECT COUNT(*)FROM edusign WHERE user_id = 3) AS volume;


