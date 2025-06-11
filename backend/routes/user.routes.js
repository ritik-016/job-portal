import express from 'express';
import { register, login, updateProfile } from '../controllers/user.controller.js';
import isAuthenticated from '../middleware/isAuthenticated.js';

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update-profile").post(isAuthenticated, updateProfile);

export default router;