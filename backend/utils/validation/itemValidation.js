const Joi = require('joi');

// Schema for creating a new item
const createItemSchema = Joi.object({
    name: Joi.string().required().min(3).max(100).messages({
        'string.empty': 'Name is required.',
        'string.min': 'Name must be at least 3 characters.',
        'string.max': 'Name cannot exceed 100 characters.',
    }),
    description: Joi.string().optional().max(500).messages({
        'string.max': 'Description cannot exceed 500 characters.',
    }),
    price: Joi.number().optional().positive().messages({
        'number.positive': 'Price must be a positive number.',
    }),
    createdAt: Joi.date().optional().default(Date.now),
});

// Schema for updating an item
const updateItemSchema = Joi.object({
    name: Joi.string().optional().min(3).max(100),
    description: Joi.string().optional().max(500),
    price: Joi.number().optional().positive(),
});

// Schema for searching items
const searchItemsSchema = Joi.object({
    q: Joi.string().required().messages({
        'string.empty': 'Search query (q) is required.',
    }),
});

module.exports = {
    createItemSchema,
    updateItemSchema,
    searchItemsSchema,
};
