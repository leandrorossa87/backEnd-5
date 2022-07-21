
const express = require('express');
const app = express();


//Seteo de ejs como motor de plantillas
app.set('view engine', 'ejs');
// el .set crea una variable de entorno
app.set('views', __dirname + '/views')

app.use(require ('./routes/products'))
app.listen(3000, () => console.log('servidor iniciado'))
