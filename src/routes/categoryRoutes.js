const express = require('express');
const router = express.Router();

const controller = require('../controllers/categoryController');

//create your routes eg router.get('/', controller.readAllUser);
router.post('/', controller.createNewCategory)
router.get('/:categoryId/furniture', controller.getFurnitureByCategory);


module.exports = router;