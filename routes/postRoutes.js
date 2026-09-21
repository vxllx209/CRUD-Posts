const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');


// ==================================
// RUTAS DE POSTS
// ==================================

// INDEX - Listar todos los posts
router.get('/', postController.index);

// CREATE - Formulario para crear un nuevo post
router.get('/create', postController.create);

module.exports = router;