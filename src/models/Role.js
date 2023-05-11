const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        static associate(models) {
            // Define associations here
        }
    }
    Role.init(
        {
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Role",
            tableName: "roles",
        }
    );
    return Role;
};
