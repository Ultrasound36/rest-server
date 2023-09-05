const { Router } = require('express');
const { formularioGet, 
        formularioPost, 
        formularioPut, 
        formularioPatch, 
        formularioDelete 
      } = require('../controllers/crud-form.controller');

const router = Router();

router.get( '/', formularioGet );

router.post('/',  formularioPost );

router.put('/:id',  formularioPut );

router.patch('/',  formularioPatch );

router.delete('/',  formularioDelete );

module.exports = router;