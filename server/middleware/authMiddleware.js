const jwt = require("jsonwebtoken");
const Auth = require("../models/authModel");

const AuthMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(500).json({ message: "No token provided." });
        }
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        const userId = decodedToken.userId;
        const username = decodedToken.username;
        const user = await Auth.findOne({ username });
        if (!user) {
            return res.status(400).send("Invalid username or password");
        }
        res.locals.userId = userId;
        next();
    } catch (error) {
        console.log('error', error);
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token has expired. Please log in again." });
        }
        return res.status(401).json({ message: "Invalid token. Please log in again." });
    }
};

module.exports = AuthMiddleware;