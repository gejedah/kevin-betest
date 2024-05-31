import express from 'express';
var router = express.Router();
import { createMongoDataController } from '../controller/create';
import { updateMongoDataController } from '../controller/update';
import { getUserByIdNumberController } from '../controller/getByIdNumber';

router.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource');
});
router.post('/users', createMongoDataController);
router.get('/users', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource');
});
router.get('/users/account/:number', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource');
});
router.get('/users/identity/:number', getUserByIdNumberController);
router.get('/users/:id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource');
});
router.put('/users/:id', updateMongoDataController);
router.delete('/users/:id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource');
});

module.exports = router;