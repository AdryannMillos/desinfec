const customerHistoricCreateService = require("../services/customerHistoricCreateService");
const customerHistoricListService = require("../services/customerHistoricListService");

async function index(req, res) {
    let customerHistoric;
    try {
        if (req.user.id !== 1) {
            return res.status(403).json({
                message: "You are not allowed to perform this action",
            });
        }
        customerHistoric = await customerHistoricListService.execute();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    return res.status(200).json(customerHistoric);
}

async function store(req, res) {
    try {
        if (req.user.id !== 1) {
            return res.status(403).json({
                message: "You are not allowed to perform this action",
            });
        }
        const {
            customerId,
            userId,
            serviceId,
            observations,
            initialDate,
            finalDate,
            status,
        } = req.body;

        const customerHistoricObj = {
            customer_id: customerId,
            user_id: userId,
            service_id: serviceId,
            observations,
            initialDate,
            finalDate,
            status,
        };

        await customerHistoricCreateService.execute(customerHistoricObj);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    return res.status(201).json({ message: "Historic created successfully" });
}

module.exports = {
    store,
    index,
};
