const express = require('express')
const router = express.Router()
const controller = require('./../controllers/heroi')

router.get('/mostrar-heroi', controller.mostrarHeroi)
router.post('/cadastrar-heroi', controller.listarHeroi)
router.post('/cadastrar-vilao', controller.listarVilao)
router.post('/batalhar', controller.batalhar)

module.exports = router