var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/create', createMongoDataController);
router.get('/list', createMongoDataController);
router.put('/update', createMongoDataController);
router.delete('/remove', createMongoDataController);

module.exports = router;
