const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()
const fs = require('fs')


// Configuraciones
app.set('port', process.env.PORT || 5400)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Routes


// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))
app.use(function (req, res)  {
    let html = fs.readFileSync(path.join(__dirname, 'public') + '/index.html', 'utf8')
    res.setHeader('Content-Type', 'text/html ; charset=UTF-8 ')
    res.send(html)
})

// Servidor
app.listen(app.get('port'), ()=> {
    console.log(`Server ON ---> PORT => ${app.get('port')}`)
})