const path = require("path");

// Use the existing dishes data
const dishes = require(path.resolve("src/data/dishes-data"));

// Use this function to assign ID's when necessary
const nextId = require("../utils/nextId");

// TODO: Implement the /dishes handlers needed to make the tests pass

function list(req, res, next){
    res.json({data: dishes});//
}

function create(req, res){
    //const reqBody = res.locals.reqBody; 
    const {data: {name, description, price, image_url} = {} } = req.body; 

    

    const newDish = {
        id: nextId(),
        name,
        description,
        price,
        image_url,

    };

    //console.log(newDish);
    dishes.push(newDish);
    res.status(201).json({data: newDish});
}

function read(req, res){
    const dish = res.locals.dish;
    console.log(dish);
    res.json({data: dish});
}

//export functions
module.exports = {
    create:[
        create,
    ],
    read: [
        read,
    ],
    list,
}