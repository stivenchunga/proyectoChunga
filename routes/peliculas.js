const { Router } = require('express');
const { getPeliculas, postPeliculas } = require('../controllers/peliculas');

const router = Router();


router.get('/', getPeliculas);

router.post('/', postPeliculas)


module.exports = router;