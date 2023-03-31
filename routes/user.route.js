import express from "express";
import { list} from "../controller.js/user.controller.js";

const router = express.Router();

router.get("/list",list);
router.post("/block", block);
export default router;