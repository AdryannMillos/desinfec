const userRepository = require("../repositories/userRepository");
const bcrypt = require("bcrypt");

async function execute(user) {
    const userFound = await userRepository.findByEmail(user.email);
    if (userFound) {
        throw new Error("User already exists");
    }
    user.password = bcrypt.hashSync(user.password, 10);
    const newUser = await userRepository.create(user);
    return newUser;
}

module.exports = {
    execute,
};
