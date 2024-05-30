import express from 'express';
var router = express.Router();
import { createMongoDataController } from '../controller/create';
import { updateMongoDataController } from '../controller/update';

/* GET users listing. */
router.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource');
});
router.post('/users/create', createMongoDataController);
router.get('/users', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource');
});
router.get('/users/account/:number', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource');
});
router.get('/users/identity/:number', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource');
});
router.get('/users/:id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource');
});
router.put('/users/:id/update', updateMongoDataController);
router.delete('/users/:id/remove', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource');
});

module.exports = router;
