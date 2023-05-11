const userRepository = require("../repositories/userRepository");

async function execute() {
    const users = await userRepository.findAll();
    return users;
}

module.exports = {
    execute,
};
