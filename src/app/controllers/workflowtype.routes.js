import express from "express";
import {
    getWorkflowtype
} from "./workflowtype.controller.js";

const router = express.Router();

router.get("/icontype", getWorkflowtype);

export default router;