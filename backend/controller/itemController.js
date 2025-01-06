const {  getAllItems, getItemById, createItem, updateItem, deleteItem, searchedItems } = require("../service/itemService")
const utils = require('../utils/messages')
// Get all items
const getAllItemsController = catchAsync( async (req, res) => {
    const result  = await getAllItems()    
    return utils.successResponse(result, res);
});

// Get item by ID
const getItemByIdController = catchAsync( async (req, res) => {
    const result = await getItemById(req.params.id);
    if (result?.messageKey) return utils.failureResponse({ message: result.messageKey }, res);

    return utils.successResponse(result, res);

});

// Create new item
const createItemController =catchAsync (async (req, res) => {
      const result = await createItem(req.body)
      return utils.successResponse(result, res);
});

// Update item by ID
const updateItemController =catchAsync( async (req, res) => {

      const result = updateItem(req.body,req.params.id)
      if (result?.messageKey) return utils.failureResponse({ message: result.messageKey }, res);

      return utils.successResponse(result, res);

    
});

// Delete item by ID
const deleteItemController =catchAsync( async (req, res) => {

      const result = deleteItem(req.params.id)
      if (result?.messageKey) return utils.failureResponse({ message: result.messageKey }, res);

      return utils.successResponse(result, res);

});

// Search items by name
const searchItemsController = catchAsync (async (req, res) => {
const result = searchedItems(req.query)
return utils.successResponse(result, res);

});


module.exports={
      getAllItemsController,
      getItemByIdController,
      createItemController,
      updateItemController,
      deleteItemController,
      searchItemsController
}