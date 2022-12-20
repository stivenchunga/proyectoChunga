const { Router } = require('express');
const { getGanador, postGanador } = require('../controllers/ganador');

const router = Router();

router.get('/', getGanador);

router.post('/', postGanador)


module.exports = router;