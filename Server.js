const express = require("express");
const app = express();
const { Pool } = require('pg');

const pool = new Pool({
 user: 'kmjlacfk',
 host: 'balarama.db.elephantsql.com',
 database: 'kmjlacfk',
 password: 'JFHaVsipVYb9NXs7DOdVxPLCq9cGVWvI',
 port: 5432,
});


app.get("/", (req, res) => {
    pool
      .query('SELECT * FROM users;')
      .then(data => res.json(data)) 
      .catch(e => res.sendStatus(404)); 
  });
  




/************/

app.listen('3000', () => console.log('connected'));
