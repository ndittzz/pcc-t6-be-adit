import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import User from "../model/UsersModel.js";

const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'] || req.headers['Authorization'];
        if (!authHeader?.startsWith('Bearer ')) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
        
        const user = await User.findByPk(decoded.id, {
            attributes: ['id', 'username', 'fullName']
        });

        if (!user) return res.status(401).json({ message: "Unauthorized" });

        req.user = {
            id: user.id,
            username: user.username,
            fullName: user.fullName
        };

        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ 
                message: "Token expired",
                shouldRefresh: true
            });
        }
        return res.status(401).json({ message: "Unauthorized" });
    }
};

export default verifyToken;