const serviceRepository = require("../repositories/serviceRepository");

async function execute(service) {
    const serviceFound = await serviceRepository.findByName(service.name);
    if (serviceFound) {
        throw new Error("Service already exists");
    }

    const newService = await serviceRepository.create(service);
    return newService;
}

module.exports = {
    execute,
};
