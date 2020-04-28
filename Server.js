const express = require("express");
const app = express();
const { Pool } = require('pg');
var bodyParser = require('body-parser')


const pool = new Pool({
 user: 'kmjlacfk',
 host: 'balarama.db.elephantsql.com',
 database: 'kmjlacfk',
 password: 'JFHaVsipVYb9NXs7DOdVxPLCq9cGVWvI',
 port: 5432,
});


/** Get all users */
app.get("/", (req, res) => {
    pool
      .query('SELECT * FROM users;')
      .then(data => res.json(data)) 
      .catch(e => res.sendStatus(404)); 
  });


  
  /** Get all users with "id" */
  app.get("/:id", (req, res) => {
    const { id } = req.params; 
    pool
      .query('SELECT * FROM users WHERE id=$1;', [id])
      .then(data => res.json(data)) 
      .catch(e => res.sendStatus(404)); 
  });


  /** Create new user */
  app.use(bodyParser.json());

 
  app.post("/", (req, res) => {
       
  const { id } = req.body
  const { first_name } = req.body
  const { last_name } = req.body
  const { age } = req.body
 
    pool
    .query('INSERT INTO users(id, first_name, last_name,age, age) values($1,$2,$3,$4);', [id, first_name,last_name,age])
    .then(data => res.status(201).json(data))
      .catch(e => console.log(e)); 
  });


 /** Edit existing user */

 app.put("/:id", (req, res) => {
    const { id } = req.params
    const { first_name } = req.body
   
    pool
      .query('UPDATE users SET first_name=$1 WHERE id=$2;', [first_name, id])
      .then(data => res.status(201).json(data))
      .catch(e => console.log(e)); 
   });
   



/************/

app.listen('3000', () => console.log('connected'));
