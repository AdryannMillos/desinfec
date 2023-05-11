const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRepository = require("../../user/repositories/userRepository");

async function execute(email, password) {
    const user = await userRepository.findByEmail(email);
    if (!user) {
        throw new Error("User not found or password does not match");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        throw new Error("User not found or password does not match");
    }

    const jwtToken = jwt.sign(
        {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            role_id: user.role_id,
            phone: user.phone,
            email: user.email,
        },
        process.env.JWT_SECRET || "somethingsecret",
        {
            expiresIn: "2h",
        }
    );

    return jwtToken;
}

module.exports = {
    execute,
};
