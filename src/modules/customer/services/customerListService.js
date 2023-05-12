const customerRepository = require("../repositories/customerRepository");

async function execute() {
    const customers = await customerRepository.findAll();
    return customers;
}

module.exports = {
    execute,
};
