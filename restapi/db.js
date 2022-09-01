const Pool = require ('pg').Pool;

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"deliveroodb",
    password:"@Ezekiel020819",
    port:5432,
});

module.exports = pool;