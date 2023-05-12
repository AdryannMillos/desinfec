const customerHistoricRepository = require("../repositories/customerHistoricRepository");

async function execute() {
    const historics = await customerHistoricRepository.findAll();
    return historics;
}

module.exports = {
    execute,
};
