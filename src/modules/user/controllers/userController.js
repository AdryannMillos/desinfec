const userCreateService = require("../services/userCreateService");
const userListService = require("../services/userListService");

async function index(req, res) {
    let users;
    try {
        if (req.user.id !== 1) {
            return res.status(403).json({
                message: "You are not allowed to perform this action",
            });
        }
        users = await userListService.execute();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    return res.status(200).json(users);
}

async function store(req, res) {
    try {
        if (req.user.id !== 1) {
            return res.status(403).json({
                message: "You are not allowed to perform this action",
            });
        }
        const { firstname, lastname, roleId, phone, email, password } =
            req.body;

        const userObj = {
            firstname,
            lastname,
            role_id: roleId,
            phone,
            email,
            password,
        };

        await userCreateService.execute(userObj);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    return res.status(201).json({ message: "User created successfully" });
}

module.exports = {
    store,
    index,
};
