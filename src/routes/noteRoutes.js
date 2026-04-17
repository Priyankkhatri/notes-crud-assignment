import { Router } from "express";
import { createNote, getNotes } from "../controllers/noteController.js";

const router = Router();

router.post("/", createNote);
router.get("/", getNotes);

export default router;
