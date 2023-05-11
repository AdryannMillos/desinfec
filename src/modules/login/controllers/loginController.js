const signInService = require("../services/signInService");

async function signIn(req, res) {
    try {
        const { email, password } = req.body;
        const token = await signInService.execute(email, password);

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    signIn,
};
