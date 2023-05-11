module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("permissions", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING,
            },
            parent_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "permissions",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
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

    down: async (queryInterface) => {
        await queryInterface.dropTable("permissions");
    },
};
