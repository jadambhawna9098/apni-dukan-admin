import express from "express";
import { signin,signup,signout } from "../controller.js/admin.controller.js";
import { body } from "express-validator";
import { verifyToken } from "../midelwere/token.js";
let router =express.Router();


router.post("/signIn",signin)
router.post("/signUp",body("name").notEmpty(),
body("email","Invalid email id").isEmail(),
body("contact","Only digit is allowed").isNumeric(),
body("password","Please enter password").notEmpty(),
body("password","Password must have 5 letter at least").isLength({min: 5}),signup);
router.get("/signout",verifyToken,signout);
export default router;