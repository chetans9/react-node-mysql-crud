var express = require('express');
var router = express.Router();
let customersController = require('../app/controllers/customersController')


router.get('/',  customersController.index);
router.post('/',  customersController.create);
router.patch('/:id',  customersController.update);
router.get('/:id',  customersController.edit);
router.delete('/:id',  customersController.delete);

module.exports = router;
