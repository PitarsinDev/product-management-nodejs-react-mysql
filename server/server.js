const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'store_db'
});

db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.post('/api/add-product', (req, res) => {
    const { name, quantity, image, hiddenText } = req.body;
    const sql = 'INSERT INTO products (name, quantity, image, hiddenText) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, quantity, image, hiddenText], (err, result) => {
      if (err) {
        console.error('Error adding product:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(201).send('Product added successfully');
      }
    });
});

app.post('/api/purchase', (req, res) => {
    const { productId } = req.body;
    const sql = 'UPDATE products SET hiddenText = NULL WHERE id = ?';
    db.query(sql, [productId], (err, result) => {
      if (err) {
        console.error('Error purchasing product:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send('Product purchased successfully');
      }
    });
});

app.listen(port, () => {
    console.log('Server is running');
});