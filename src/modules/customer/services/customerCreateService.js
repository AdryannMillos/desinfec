const customerRepository = require("../repositories/customerRepository");

async function execute(customer) {
    const customerFound = await customerRepository.findByEmail(customer.email);
    if (customerFound) {
        throw new Error("Customer already exists");
    }

    const newCustomer = await customerRepository.create(customer);
    return newCustomer;
}

module.exports = {
    execute,
};
