import express from "express";
import {
    postWorkflow,
    getWorkflow,
    getWorkflowById,
    putWorkflow,
    deleteWorkflow
} from "./workflow.controller.js";

const router = express.Router();

router.post("/workflow", postWorkflow);
router.get("/workflow", getWorkflow);
router.get("/workflow/:id", getWorkflowById);
router.put("/workflow/:id", putWorkflow);
router.delete("/workflow/:id", deleteWorkflow);

export default router;