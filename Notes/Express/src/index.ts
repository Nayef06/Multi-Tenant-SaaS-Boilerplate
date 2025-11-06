import express, { NextFunction, Request, Response } from 'express';
import usersRouter from './routes/users'
import { createApp } from './createApp';
// const app = express();

// app.use('/api/users', usersRouter)
const app = createApp()

const PORT = 3000;

// app.get('/api/example', (request: Request, response: Response, next: NextFunction)=>{
//     response.send([])
// })

app.listen(PORT, ()=>{
    console.log(`Running on Port ${PORT}`);
})
