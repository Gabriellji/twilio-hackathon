require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require('./resources/user/user.router')
const authRouter = require('./resources/user/auth.router')
const eventRouter = require('./resources/event/event.router')

app.use(express.json())

app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.json({ message: 'Service is running!'})
        return
    }
    next()
})

app.use('/register', userRouter)
app.use('/auth', authRouter)
app.use('/event', eventRouter)

module.exports = app