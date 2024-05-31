"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var create_1 = require("../controller/create");
var update_1 = require("../controller/update");
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.post('/users/create', create_1.createMongoDataController);
router.get('/users', create_1.createMongoDataController);
router.get('/users/account/:number', create_1.createMongoDataController);
router.get('/users/identity/:number', create_1.createMongoDataController);
router.get('/users/:id', create_1.createMongoDataController);
router.put('/users/:id/update', update_1.updateMongoDataController);
router.delete('/users/:id/remove', create_1.createMongoDataController);
module.exports = router;
