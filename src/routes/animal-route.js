// import dependencies and initialize the express router
const express = require('express');
const AnimalsController = require('../controllers/animal-controller');
const router = express.Router();
// define routes
router.get('', AnimalsController.getAnimals);
router.get('/:id', AnimalsController.getAnimal);
router.post('', AnimalsController.postAnimal);
router.put('/:id', AnimalsController.putAnimal);
router.delete('/:id', AnimalsController.deleteAnimal);
module.exports = router;
