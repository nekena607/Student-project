-- Crée la base d'abord (si pas déjà fait), en dehors de psql connecté à une autre base :
-- CREATE DATABASE student_db;

-- Puis connecte-toi à student_db et lance ceci :

CREATE TABLE IF NOT EXISTS etudiants (
    id          SERIAL PRIMARY KEY,         
    first_name  VARCHAR(100) NOT NULL,
    last_name   VARCHAR(100) NOT NULL,
    email       VARCHAR(150) NOT NULL UNIQUE, 
    age         INTEGER,
    created_at  TIMESTAMP DEFAULT NOW()
);

-- (optionnel) quelques données de test
INSERT INTO etudiants (first_name, last_name, email, age) VALUES
('Rina', 'Rakoto', 'rina.rakoto@example.com', 21),
('Fetra', 'Andria', 'fetra.andria@example.com', 23);
