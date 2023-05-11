const userRepository = require("../repositories/userRepository");

async function execute(user) {
    const newUser = await userRepository.create(user);
    return newUser;
}

module.exports = {
    execute,
};
