require("dotenv").config()
const express = require('express')
const app = express()

const JWT = require('jsonwebtoken')

app.use(express.json())

const posts = [
    {
        username: "Luffy",
        title: "post 1"
    },
    {
        username: "Sabo",
        title: "post 2"
    }
]

app.get('/post', (request, response) => {
    response.json(posts)
})

app.post('/login',authenticateToken,(request, response) => {
   //first authenticate user, then do below
    const username = request.body.username 
    const user = {name: username}
    const accessToken = JWT.sign(user, process.env.ACCESS_TOKEN_SECRET)
    response.json({accessToken: accessToken})
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token==null) return res.sendStatus(401)

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}


app.listen(3000)
