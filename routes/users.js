var express = require('express');
var router = express.Router();
import { createMongoDataController } from '../controller/create';
import { updateMongoDataController } from '../controller/update';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/users/create', createMongoDataController);
router.get('/users', createMongoDataController);
router.get('/users/:id', createMongoDataController);
router.get('/users/account/:number', createMongoDataController);
router.get('/users/identity/:number', createMongoDataController);
router.put('/users/update', updateMongoDataController);
router.delete('/users/remove', createMongoDataController);

module.exports = router;
