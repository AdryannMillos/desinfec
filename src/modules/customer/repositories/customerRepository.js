const Models = require("../../../models/index");

const { Customer } = Models;

const findByEmail = async (email) => Customer.findOne({ where: { email } });

const create = async (customerObj) => Customer.create(customerObj);

const findAll = async () => Customer.findAll();

module.exports = {
    findByEmail,
    create,
    findAll,
};
