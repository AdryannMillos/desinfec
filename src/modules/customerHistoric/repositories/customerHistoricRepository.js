const Models = require("../../../models/index");

const { CustomerHistoric } = Models;

const create = async (customerHistoricObj) =>
    CustomerHistoric.create(customerHistoricObj);

const findAll = async () => CustomerHistoric.findAll();

module.exports = {
    create,
    findAll,
};
