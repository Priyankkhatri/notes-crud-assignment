import { Router } from "express";
import { createNote, getNotes, getNoteById, updateNote, patchNote, deleteNote } from "../controllers/noteController.js";

const router = Router();

router.post("/", createNote);
router.get("/", getNotes);
router.get("/:id", getNoteById);
router.put("/:id", updateNote);
router.patch("/:id", patchNote);
router.delete("/:id", deleteNote);

export default router;
