const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Service extends Model {
        static associate(models) {
            // associations can be defined here
        }
    }
    Service.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            cost: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Service",
            tableName: "services",
        }
    );
    return Service;
};
