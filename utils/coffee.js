const Coffee = require("../models/coffee");

// All coffee
async function allCoffee() {
    return await Coffee.findAll({});
}

async function addCoffee(coffee) {
    return Coffee.create(coffee);
}

async function deleteAllCoffee() {
    return await Coffee.destroy({truncate: true});
}

// One coffee
async function oneCoffee(id) {
    return await Coffee.findOne({where: {id}});
}

async function editCoffee({id, name, origin, strength}) {
    try {
        const coffee = await Coffee.findOne({where: {id}});
        return await Coffee.update({name: name || coffee.name,
                                                origin: origin || coffee.origin,
                                                strength: strength || coffee.strength
                                            }, {where: {id}}
    
    );
    } catch(error) {
        console.error(error)
        return {msg: "Did not work"}
    }
}

async function deleteCoffee(id) {
    return await Coffee.destroy({where: {id}});
}


module.exports = {
    allCoffee,
    oneCoffee,
    addCoffee,
    editCoffee,
    deleteCoffee,
    deleteAllCoffee
};