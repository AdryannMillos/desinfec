const userRepository = require("../repositories/userRepository");

async function execute(user) {
    const userFound = await userRepository.findByEmail(user.email);
    if (userFound) {
        throw new Error("User already exists");
    }
    const newUser = await userRepository.create(user);
    return newUser;
}

module.exports = {
    execute,
};
