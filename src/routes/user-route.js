const userController = require('../controllers/user-controller');
const router = require('express').Router();

//Constantes de Autorização
const authorize = require('../configs/authorization');
const roles = require('../helpers/roles.js');

//definição de rotas
router.post('/register', userController.register);
router.post('/login', userController.login);

//definição de rotas
router.get ("/:id", authorize(roles.Boss), userController.getUser);
router.get ("", authorize(roles.Boss), userController.getUsers);
router.put ("/:id", authorize(roles.Boss),userController.putUser);
router.delete ("/:id", authorize(roles.Boss),userController.removeUser);

module.exports = router;
