require('dotenv').config()

const { env: { PORT = 8080, NODE_ENV: env, MONGODB_URL }, argv: [, , port = PORT] } = process


const express = require('express')
const winston = require('winston')
const { name, version } = require('./package')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const { cors } = require('./mid-wares')
const { mongoose } = require('tennis-data')
const router = require('./routes')
const bodyParser = require('body-parser')

const {
    registerUser,
    authenticateUser,
    retrieveUser,
    book,
    modifyBook,
    // retrievePublishedEvents,
    // subscribeEvent
} = require('./routes/handlers')

const jsonBodyParser = bodyParser.json()

const { jwtVerifierMidWare } = require('./mid-wares')

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const logger = winston.createLogger({
            level: env === 'development' ? 'debug' : 'info',
            format: winston.format.json(),
            transports: [
                new winston.transports.File({ filename: 'server.log' })
            ]
        })

        if (env !== 'production') {
            logger.add(new winston.transports.Console({
                format: winston.format.simple()
            }))
        }

        const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

        const app = express()

        app.use(cors)

        app.use(morgan('combined', { stream: accessLogStream }))

        app.use('/api', router)

        app.post('/users', jsonBodyParser, registerUser)

        app.post('/users/auth', jsonBodyParser, authenticateUser)

        app.get('/users', jwtVerifierMidWare, retrieveUser)

        app.post('/users/bookings', [jwtVerifierMidWare, jsonBodyParser], book)

        app.patch('/users/bookings/:id', [jwtVerifierMidWare, jsonBodyParser], modifyBook)


        // app.post('/users', jwtVerifierMidWare, book)

        app.listen(port, () => logger.info(`server ${name} ${version} up and running on port ${port}`))

        process.on('SIGINT', () => {
            logger.info('server abruptly stopped')

            process.exit(0)
        })
    })