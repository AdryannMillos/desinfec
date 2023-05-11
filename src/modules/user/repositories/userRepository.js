const Models = require("../../../models/index");

const { User } = Models;

const findByEmail = async (email) => User.findOne({ where: { email } });

const create = async (userObj) => User.create(userObj);

const findAll = async () => User.findAll();

module.exports = {
    findByEmail,
    create,
    findAll,
};
