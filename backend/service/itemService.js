const { MESSAGES } = require('../config/constant');
const Item = require('../models/Item');

const getAllItems = async () =>{
return await Item.find()
}

const getItemById = async (id) =>{
const item =  await Item.findById(id);
if (!item) {
       return {messageKey :MESSAGES.ITEM.NOT_FOUND};
  }
  return item
}

const createItem = async(data) =>{
      const { name, description, price } = data;
      return await Item.create({ name, description, price });
}

const updateItem = async (data,id) =>{
      const updatedItem = await Item.findByIdAndUpdate(
        id,
        data,
        { new: true }
      );

      if (!updatedItem) {
            return {messageKey :MESSAGES.ITEM.NOT_FOUND};
      }
      return updatedItem
}

const deleteItem = async (id) =>{
      const deletedItem = await Item.findByIdAndDelete(id);
      if (!deletedItem) {
            throw new Error(MESSAGES.ITEM.NOT_FOUND);
        }
      return deletedItem
}

const searchedItems = async (query) =>{
      const { q } = query;
      const items = await Item.find({ $text: { $search: q } });
      return items
}
module.exports = {
      getAllItems,
      getItemById,
      createItem,
      updateItem,
      deleteItem,
      searchedItems
}