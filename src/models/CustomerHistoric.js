const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class CustomerHistoric extends Model {
        static associate(models) {
            CustomerHistoric.belongsTo(models.Customer, {
                foreignKey: "customer_id",
            });
            CustomerHistoric.belongsTo(models.Service, {
                foreignKey: "service_id",
            });
            CustomerHistoric.belongsTo(models.User, {
                foreignKey: "user_id",
            });
        }
    }
    CustomerHistoric.init(
        {
            customer_id: DataTypes.INTEGER,
            service_id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
            observations: DataTypes.STRING,
            date: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            status: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "CustomerHistoric",
            tableName: "customer_historic",
        }
    );
    return CustomerHistoric;
};
