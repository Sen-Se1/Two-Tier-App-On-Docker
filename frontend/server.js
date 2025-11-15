const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.static('public'));

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'db',
    user: 'root',
    password: 'rootpassword',
    database: 'contacts_db'
});

db.connect((err) => {
    if (err) {
        console.log('Erreur connexion DB:', err);
        setTimeout(() => db.connect(), 2000);
    } else {
        console.log('Connecté à MySQL');
    }
});

app.get('/contacts', (req, res) => {
    db.query('SELECT * FROM contacts', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

app.post('/contacts', (req, res) => {
    const { nom, email } = req.body;
    db.query('INSERT INTO contacts (nom, email) VALUES (?, ?)', [nom, email], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json({ id: results.insertId, nom, email });
    });
});

app.listen(3000, () => {
    console.log('Serveur frontend démarré sur le port 3000');
});