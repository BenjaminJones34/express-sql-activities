const { DataTypes } = require("sequelize");
const { connection } = require("../connection");

const Book = connection.define("Book", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        indexes: [{unique: true, fields: ["name"]}]
    });

module.exports = Book;