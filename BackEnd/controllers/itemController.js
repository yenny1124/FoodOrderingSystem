// save all logics for router functions

const Item = require('../models/itemModel') // import item model
const asyncHandler = require('express-async-handler')

// get all data from DB
const getItems = asyncHandler(async(req, res) => { // access db 
    try{
        const items = await Item.find({}) 
        res.status(200).json(items) // respond back to client 

    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

// get a single item from DB
const getItem = asyncHandler(async(req, res) => { // access db 
    try{
        const {id} = req.params
        const item = await Item.findById(id) 
        res.status(200).json(item)

    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

// create an item
const createItem = asyncHandler(async(req, res) => { // access db 
    try{
        const item = await Item.create(req.body)
        res.status(200).json(item)

    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

// update an item
const updateItem = asyncHandler(async(req, res) => { // access db 
    try{
        const {id} = req.params // the item by id to update
        const item = await Item.findByIdAndUpdate(id,req.body) //send form to client
        //we cannot find the item in DB
        if(!item){
            res.status(404)
            throw new Error(`cannot find any item with ID ${id}`)
        }
        // the item successfully updated 
        const updatedItem = await Item.findById(id)
        res.status(200).json(updatedItem) // return the updated item

    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }

})

const deleteItem = asyncHandler(async(req, res) => { // access db 
    try{
        const {id} = req.params // the item to delete
        const item = await Item.findByIdAndDelete(id)
        //we cannot find the item in DB
        if(!item){
            res.status(404)
            throw new Error(`cannot find any item with ID ${id}`)
        }
        // the item successfully deleted
        res.status(200).json(item) // return the deleted item

    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}