import { Router } from "express";
import { createNote, getNotes, getNoteById } from "../controllers/noteController.js";

const router = Router();

router.post("/", createNote);
router.get("/", getNotes);
router.get("/:id", getNoteById);

export default router;
