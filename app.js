const express = require('express')
const app = express()
const session = require('express-session');
const {router} = require('./routes/users.js')
const {hashedSecret} = require('./crypto/config.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    session({
      secret: hashedSecret,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    })
);

app.use('/', router)

app.listen(3001, function () {
    console.log('Express está escuchando en el puerto 3001')
})