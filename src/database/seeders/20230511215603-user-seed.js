const bcrypt = require("bcrypt");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash("password", saltRounds);
        await queryInterface.bulkInsert(
            "users",
            [
                {
                    role_id: 1,
                    firstname: "John",
                    lastname: "Doe",
                    phone: "555-555-5555",
                    email: "johndoe@example.com",
                    password: hashedPassword,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("users", null, {});
    },
};
