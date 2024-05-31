import express from 'express';
var router = express.Router();
import { createMongoDataController } from '../controller/create';
import { updateMongoDataController } from '../controller/update';
import { getUserByIdNumberController } from '../controller/getByIdNumber';

router.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource');
});
router.post('/', createMongoDataController);
router.get('/account/:number', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource');
});
router.get('/identity/:number', getUserByIdNumberController);
router.get('/:id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource');
});
router.put('/:id', updateMongoDataController);
router.delete('/:id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource');
});

module.exports = router;