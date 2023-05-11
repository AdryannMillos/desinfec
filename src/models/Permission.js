const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Permission extends Model {
        static associate(models) {
            Permission.belongsTo(models.Permission, {
                foreignKey: "parent_id",
            });
            Permission.hasMany(models.Permission, { foreignKey: "parent_id" });
            // Define other associations here
        }
    }
    Permission.init(
        {
            name: DataTypes.STRING,
            parent_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Permission",
            tableName: "permissions",
        }
    );
    return Permission;
};
