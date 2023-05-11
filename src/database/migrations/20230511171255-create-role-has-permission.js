module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("role_has_permissions", {
            permission_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "permissions",
                    key: "id",
                },
            },
            role_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "roles",
                    key: "id",
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("role_has_permissions");
    },
};
