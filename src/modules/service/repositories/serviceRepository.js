const Models = require("../../../models/index");

const { Service } = Models;

const findByName = async (name) => Service.findOne({ where: { name } });

const create = async (serviceObj) => Service.create(serviceObj);

const findAll = async () => Service.findAll();

module.exports = {
    findByName,
    create,
    findAll,
};
