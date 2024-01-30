const express = require('express')
const app = express()
const session = require('express-session');
const {router} = require('./routes/users.js')
const {hashedSecret} = require('./crypto/config.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    session({
      // para que cuando enviemos el token en jwt, matchee
      secret: hashedSecret,
      //false para que no guarde todo el rato aunque no haya cambio
      resave: false,
      //la sesion una vez entras, esta inicializada
      saveUninitialized: true,
      //aqui se guardan datos de sesion del usuario que se enviaran al servidor
      cookie: { secure: false },
    })
);

app.use('/', router)

app.listen(3001, function () {
    console.log('Express está escuchando en el puerto 3001')
})