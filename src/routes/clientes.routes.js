const express = require('express')
const router = express.Router()

const Cliente = require('../db/models/cliente.model')


// obtener datos
router.get('/', async (req, res) => {
    const clientes = await Cliente.find()
    console.log(clientes)
    res.json(clientes)
})

// Obtener dato especifico
router.get('/:id', async (req,res) => {
    const cliente = await Cliente.findById(req.params.id)
    console.log(cliente)
    res.json(cliente)
})

// Añadir DATOS
router.post('/', async (req,res) => {
    const { nombre } = req.body
    const cliente = new Cliente ({nombre})
    await cliente.save()
    res.json({ status: 'Cliente Guardado' })
})
// Modificar datos
router.put('/:id', async (req,res) => {
    const {nombre} = req.body
    const newCliente = {nombre}
    await Cliente.findByIdAndUpdate(req.params.id, newCliente)
    res.json({status: 'Cliente Guardado'})
})

// Eliminar datos
router.delete('/:id', async (req,res) => {
    await Cliente.findByIdAndRemove(req.params.id)
    res.json({status: 'Cliente Eliminado'})
})


