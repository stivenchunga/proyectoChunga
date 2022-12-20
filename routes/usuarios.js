const { Router } = require('express');
const { getUsuarios, postUsuarios , getUsuarioId } = require('../controllers/usuario');

const router = Router();

router.get('/', getUsuarios);

router.get('/:id', getUsuarioId);

router.post('/', postUsuarios);


module.exports = router;