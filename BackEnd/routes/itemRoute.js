const express = require('express')
const Item = require('../models/itemModel') // import item model
const router = express.Router();
const {getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/itemController') // item controller
 
// get all data from DB
router.get('/', getItems)

// get a specific data by id from DB
router.get('/:id', getItem)

// create and save data to DB
router.post('/', createItem)

// update or edit data in DB (found by a specific id)
router.put('/:id', updateItem)

// delete data in DB (found by a specific id)
router.delete('/:id', deleteItem)

module.exports = router;