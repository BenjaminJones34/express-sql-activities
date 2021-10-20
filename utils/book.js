const Book = require("../models/book");

// All Book
async function allBook() {
    return await Book.findAll({});
}

async function addBook(book) {
    return Book.create(book);
}

async function deleteAllBook() {
    return await Book.destroy({truncate: true});
}

// One Book
async function oneBook(id) {
    return await Book.findOne({where: {id}});
}

async function editBook({id, name, author}) {
    try {
        const book = await Book.findOne({where: {id}});
        return await Book.update({name: name || book.name,
                                        author: author || Book.author
                                    }, {where: {id}}
    
    );
    } catch(error) {
        console.error(error)
        return {msg: "Did not work"}
    }
}

async function deleteBook(id) {
    return await Book.destroy({where: {id}});
}


module.exports = {
    allBook,
    oneBook,
    addBook,
    editBook,
    deleteBook,
    deleteAllBook
};