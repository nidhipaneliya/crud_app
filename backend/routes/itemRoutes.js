const express = require('express');
const itemController = require('../controller/itemController');
const validate = require('../middleware/validate');
const {
    createItemSchema,
    updateItemSchema,
    searchItemsSchema,
} = require('../utils/validation/itemValidation');

const router = express.Router();

// Routes with validation
router.get('/', itemController.getAllItems); // No validation needed
router.post('/', validate(createItemSchema), itemController.createItem);
router.get('/:id', itemController.getItemById); // No validation for params here
router.put('/:id', validate(updateItemSchema), itemController.updateItem);
router.delete('/:id', itemController.deleteItem); // No validation needed
router.get('/search', validate(searchItemsSchema, 'query'), itemController.searchItems);

module.exports = router;
