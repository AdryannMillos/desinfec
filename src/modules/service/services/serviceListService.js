const serviceRepository = require("../repositories/serviceRepository");

async function execute() {
    const services = await serviceRepository.findAll();
    return services;
}

module.exports = {
    execute,
};
