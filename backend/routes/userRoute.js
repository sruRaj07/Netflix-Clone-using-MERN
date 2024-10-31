import express from "express";
import { Login, Logout, Register } from "../controllers/user.js";

const router = express.Router();

router.route("/register").post(Register); // register route
router.route("/login").post(Login); // logIn route
router.route("/logout").get(Logout); // Logout Route : we are not sending any data to backend that's why "get"

export default router;