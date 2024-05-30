import express from 'express';
var router = express.Router();
import { createMongoDataController } from '../controller/create';
import { updateMongoDataController } from '../controller/update';

/* GET users listing. */
router.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource');
});
router.post('/users/create', createMongoDataController);
router.get('/users', createMongoDataController);
router.get('/users/account/:number', createMongoDataController);
router.get('/users/identity/:number', createMongoDataController);
router.get('/users/:id', createMongoDataController);
router.put('/users/:id/update', updateMongoDataController);
router.delete('/users/:id/remove', createMongoDataController);

module.exports = router;
