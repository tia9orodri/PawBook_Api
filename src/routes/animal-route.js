// import dependencies and initialize the express router
const express = require('express');
const AnimalsController = require('../controllers/animal-controller');
const router=express.Router();


const authorize = require('../configs/authorization');
const roles = require('../helpers/roles.js');

// define routes
        //Rotas Animais
router.get('',AnimalsController.getAnimals);
router.get('/:id',AnimalsController.getAnimal);
router.post('', authorize(roles.Boss),AnimalsController.postAnimal);
router.put('/data/:id', authorize(roles.Boss),AnimalsController.putAnimal);
router.delete('/:id', authorize(roles.Boss),AnimalsController.deleteAnimal);


module.exports = router;
