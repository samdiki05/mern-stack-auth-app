import express from "express";
import {register, verifyOTP, login, logout, getUser, forgotPassword, resetPassword } from "../controllers/userController.js"
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//http://localhost:4000/api/v1/user/register
router.post("/register", register);
router.post("/otp-verification", verifyOTP);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/me", isAuthenticated, getUser);
router.post("/password/forgot", forgotPassword);
router.put("/password/reset/:token", resetPassword);


export default router;
