const customerCreateService = require("../services/customerCreateService");
const customerListService = require("../services/customerListService");

async function index(req, res) {
    let customers;
    try {
        if (req.user.id !== 1) {
            return res.status(403).json({
                message: "You are not allowed to perform this action",
            });
        }
        customers = await customerListService.execute();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    return res.status(200).json(customers);
}

async function store(req, res) {
    try {
        if (req.user.id !== 1) {
            return res.status(403).json({
                message: "You are not allowed to perform this action",
            });
        }
        const {
            firstname,
            lastname,
            phone,
            email,
            state,
            city,
            zipcode,
            neighborhood,
            street,
            number,
            complement,
            reference,
        } = req.body;

        const customerObj = {
            firstname,
            lastname,
            phone,
            email,
            state,
            city,
            zipcode,
            neighborhood,
            street,
            number,
            complement,
            reference,
        };

        await customerCreateService.execute(customerObj);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    return res.status(201).json({ message: "Customer created successfully" });
}

module.exports = {
    store,
    index,
};
