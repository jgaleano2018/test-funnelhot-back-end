import express from "express";
import {
    getIcontype
} from "./icontype.controller.js";

const router = express.Router();

router.get("/icontype", getIcontype);

export default router;