const { DataTypes } = require("sequelize");
const { connection } = require("../connection");

const Coffee = connection.define("Coffee", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        origin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        indexes: [{unique: true, fields: ["name"]}]
    });

module.exports = Coffee;