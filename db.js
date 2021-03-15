const Pool = require("pg").Pool;
//can set configuration for what we can connect the database

const pool = new Pool({
   connectionString: process.env.DATABASE_URL, //heroku addons
   ssl: {rejectUnauthorized: false} 
});

module.exports = pool; 