const {Pool} = require('pg')
const pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'Luffy',
    password: '1000sunny',
    database: 'db123'
})

module.exports = pool