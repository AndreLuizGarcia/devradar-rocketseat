const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://andre:andre123@cluster0-ofpd8.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json()) //Estou configurando o express para entender json
app.use(routes)

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Query Params: Acessados no código por request.query (filtros, ordenação, paginação, ...) Ex: /?search=Andre
//Route Params: Principalmente usado para PUT and DELETE. Acessado no código por request.params. A Rota já espera por esses parâmetros. (Identificar um recurso na alteração ou remoção) Ex: /users/:id
//Body: Principalmente usado para POST and PUT. Acessado no código por request.body. (Dados para criação ou alteração de um registro)

//MongoDB (não-relacional)

app.listen(3333)