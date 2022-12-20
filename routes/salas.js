const { Router } = require('express');
const { getSalas, postSalas, deleteSalas, getSalasId } = require('../controllers/salas');

const router = Router();

router.get('/', getSalas);

router.get('/:id',getSalasId)

router.post('/', postSalas);

router.delete('/:id', deleteSalas);


module.exports = router;