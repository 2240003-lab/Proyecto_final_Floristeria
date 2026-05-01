const port = require('dotenv').config();
const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '14@nthoD0510',
    database: 'Floristeria_la_Margarita'
});

if (db) {
    console.log('Conexión a la base de datos establecida');
} else {
    console.error('');
}

module.exports = db;