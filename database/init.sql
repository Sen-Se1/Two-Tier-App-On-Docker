CREATE DATABASE IF NOT EXISTS contacts_db;
USE contacts_db;

CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO contacts (nom, email) VALUES 
('Jean Dupont', 'jean.dupont@email.com'),
('Marie Martin', 'marie.martin@email.com');