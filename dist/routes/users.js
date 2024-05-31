"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var create_1 = require("../controller/create");
var update_1 = require("../controller/update");
var getByIdNumber_1 = require("../controller/getByIdNumber");
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.post('/users', create_1.createMongoDataController);
router.get('/users', function (req, res, next) {
    res.send('respond with a resource');
});
router.get('/users/account/:number', function (req, res, next) {
    res.send('respond with a resource');
});
router.get('/users/identity/:number', getByIdNumber_1.getUserByIdNumberController);
router.get('/users/:id', function (req, res, next) {
    res.send('respond with a resource');
});
router.put('/users/:id', update_1.updateMongoDataController);
router.delete('/users/:id', function (req, res, next) {
    res.send('respond with a resource');
});
module.exports = router;
