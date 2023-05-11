const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RoleHasPermission extends Model {
    static associate(models) {
      RoleHasPermission.belongsTo(models.Role, { foreignKey: 'role_id' });
      RoleHasPermission.belongsTo(models.Permission, { foreignKey: 'permission_id' });
      // Define other associations here
    }
  };
  RoleHasPermission.init({
    permission_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RoleHasPermission',
    tableName: 'role_has_permissions'
  });
  return RoleHasPermission;
};
