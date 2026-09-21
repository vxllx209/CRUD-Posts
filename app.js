require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const PORT = process.env.PORT || 3000;

// RUTAS
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// MIDLEWARES
app.use(express.urlencoded({ extended: true }));

// JSON
app.use(express.json());

//PROGRAMAR RUTAS
app.get('/', (req, res) => {
  res.redirect('/posts');
});

app.use('/posts', postRoutes);

// SERVIDOR
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
}); 