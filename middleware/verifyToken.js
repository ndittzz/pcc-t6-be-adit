import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import User from "../model/UsersModel.js";

const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                status: "error",
                message: "Unauthorized: No token provided"
            });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.ACCESS_SECRET_KEY);

        const user = await User.findByPk(decoded.id, {
            attributes: ['id', 'username', 'fullName']
        });

        if (!user) {
            return res.status(401).json({
                status: "error",
                message: "Unauthorized: User no longer exists"
            });
        }

        req.user = {
            id: user.id,
            username: user.username,
            fullName: user.fullName
        };

        return next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                status: "error",
                message: "Unauthorized: Token expired"
            });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                status: "error",
                message: "Unauthorized: Invalid token"
            });
        }

        return res.status(500).json({
            status: "error",
            message: "Internal server error during authentication"
        });
    }
};

export default verifyToken;
