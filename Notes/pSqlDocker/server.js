const express = require('express')
const pool = require('./db')
const port = 3000

const app = express()
app.use(express.json)

app.get('/',(req,res)=>{
    res.sendStatus(200)
})

app.post('/', async (req,res)=>{
    const { name, location } = req.body
    try {
        await pool.query("INSERT INTO schools (name, address) VALUES ($1, $2)", [name, location])
        res.sendStatus(200)
    } catch (err){

    }
})



app.get('/setup', async(request, response) => {
    try{
        await pool.query("CREATE TABLE schools( id SERIAL PRIMARY KEY, name VARCHAR(100), address VARCHAR(100) )")
        res.sendStatus(200)

    } catch (err) {
        response.sendStatus(500)
    }
})


app.listen(port, ()=>{
    console.log(`were on ${port}`);
})