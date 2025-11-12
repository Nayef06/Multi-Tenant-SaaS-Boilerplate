const {Pool} = require('pg')
const pool = new Pool({
    host: 'localhost', //db for docker, localhost for localhost
    port: 5432,
    user: 'Luffy',
    password: '1000sunny',
    database: 'db123'
})

module.exports = pool