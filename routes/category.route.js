import express from "express";
import { body } from "express-validator";
import { saveAll,save,update,remove,getList,categorywithProducts } from "../controller.js/category.controller.js";
import { verifyToken } from "../midelwere/token.js";
const router=express.Router();


router.post("/saveAll" ,verifyToken,saveAll);
router.post("/save",body("categoryName").notEmpty(),save);
router.post("/update",body("categoryName").notEmpty(),update);
router.post("/remove",remove);
router.get("/list",getList);


export default router;