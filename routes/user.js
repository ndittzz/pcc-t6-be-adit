import express from 'express';
const router = express.Router();
import verifyToken from '../middleware/verifyToken.js';
import refreshToken from "../controller/refreshToken.js";
import {
    postUser,
    deleteUser,
    loginHandler,
    editUser,
    logoutHandler
} from '../controller/UsersController.js';

// ENDPOINT TOKEN REFRESH
router.get('/refresh', refreshToken);

// REGISTER NEW USER (Tidak perlu auth)
router.post('/register', postUser);

// USER LOGIN (Tidak perlu auth)
router.post('/login', loginHandler);

// Endpoint berikut membutuhkan auth
router.post('/logout', verifyToken, logoutHandler);
router.delete('/delete/:id', verifyToken, deleteUser);
router.put('/edit', verifyToken, editUser);

export default router;