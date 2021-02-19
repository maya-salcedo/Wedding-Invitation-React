const Pool = require("pg").Pool;
//can set configuration for what we can connect the database

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: "db",
    port: 5432
});

module.exports = pool; 