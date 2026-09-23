
const db = require('../config/db');


////////////////////////////
// Listar todos los posts //
////////////////////////////

const index = async (req, res) => {
  try {
    const [posts] = await db.query('SELECT * FROM posts ORDER BY id DESC');
    res.render('posts/index', { posts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al obtener los posts' });
  }
};

// ==================================
// FORMULARIO CREAR 
// ==================================

const create = (req, res) => {
  res.render('posts/create');
}


// Formulario crear post
router.get('/create', postController.create);

// Guardar información del formulario en la base de datos
router.post('/create', postController.store);

// ==================================
// 
// ==================================
const store = async (req, res) => {
  const { title, content } = req.body;
  try {
    // Body
    const { title, body } = req.body;

    // Validación de datos
    if (!title || !body) {
      console.log('Todos los campos son obligatorios');
    }

    console.log(title, body);

    await db.query('INSERT INTO posts (title, body) VALUES (?, ?)', [title, body]);
  } catch (error) {
    console.log(error);
    res.redirect('/posts/create');
  }
};

module.exports = router;

module.exports = {
  index,
  create,
  store
};  