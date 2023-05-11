const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.belongsTo(models.Role, { foreignKey: "role_id" });
        }
    }
    User.init(
        {
            firstname: DataTypes.STRING,
            lastname: DataTypes.STRING,
            role_id: DataTypes.INTEGER,
            phone: {
                type: DataTypes.STRING,
                unique: true,
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
            },
            password: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "User",
            tableName: "users",
        }
    );
    return User;
};
