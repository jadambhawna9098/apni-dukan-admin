import express from "express";
import { list, remove,verifyProduct} from "../controller.js/product.controller.js";

const router = express.Router();

router.get("/list",list);

router.post("/remove", remove);
router.post("/verify", verifyProduct);
export default router;