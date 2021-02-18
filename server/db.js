const Pool = require("pg").Pool;
//can set configuration for what we can connect the database

const pool = new Pool({
    user: "postgres",
    password: "postgresql12",
    host: "localhost",
    port: 5432
});

module.exports = pool; 