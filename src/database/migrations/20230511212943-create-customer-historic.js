module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("customer_historic", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            customer_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "customers",
                    key: "id",
                },
            },
            service_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "services",
                    key: "id",
                },
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "users",
                    key: "id",
                },
            },
            observations: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            date: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: false,
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
        await queryInterface.dropTable("customer_historic");
    },
};
