const router = require('express').Router()

const ProductController = require('../controllers/products')

router.get('/products', ProductController.get)
//router.post('/products', ProductController.post)

// VERBOS HTTP (4 TIPOS)
// GET - obter  dados
// POST - enviar/receber dados
// PUT - atualizar dados
// DELETE - remover dados

module.exports = router