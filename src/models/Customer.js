const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Customer extends Model {
        static associate(models) {
            // associations can be defined here
        }
    }
    Customer.init(
        {
            firstname: DataTypes.STRING,
            lastname: DataTypes.STRING,
            phone: DataTypes.STRING,
            email: DataTypes.STRING,
            state: DataTypes.STRING,
            city: DataTypes.STRING,
            zipcode: DataTypes.STRING,
            neighborhood: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.STRING,
            complement: DataTypes.STRING,
            reference: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Customer",
            tableName: "customers",
        }
    );
    return Customer;
};
