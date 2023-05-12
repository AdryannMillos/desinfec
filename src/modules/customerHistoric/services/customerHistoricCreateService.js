const customerHistoricRepository = require("../repositories/customerHistoricRepository");

async function execute(historic) {
    const newService = await customerHistoricRepository.create(historic);
    return newService;
}

module.exports = {
    execute,
};
