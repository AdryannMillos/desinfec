const serviceCreateService = require("../services/serviceCreateService");
const serviceListService = require("../services/serviceListService");

async function index(req, res) {
    let services;
    try {
        if (req.user.id !== 1) {
            return res.status(403).json({
                message: "You are not allowed to perform this action",
            });
        }
        services = await serviceListService.execute();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    return res.status(200).json(services);
}

async function store(req, res) {
    try {
        if (req.user.id !== 1) {
            return res.status(403).json({
                message: "You are not allowed to perform this action",
            });
        }
        const { name, cost } = req.body;

        const serviceObj = {
            name,
            cost,
        };

        await serviceCreateService.execute(serviceObj);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    return res.status(201).json({ message: "Service created successfully" });
}

module.exports = {
    store,
    index,
};
