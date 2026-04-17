import { Router } from "express";
import {
  createNote,
  createNotesBulk,
  getNotes,
  getNoteById,
  updateNote,
  patchNote,
  deleteNote,
  deleteNotesBulk,
} from "../controllers/noteController.js";

const router = Router();

// Routes
router.post("/", createNote);
router.post("/bulk", createNotesBulk);
router.get("/", getNotes);
router.get("/:id", getNoteById);
router.put("/:id", updateNote);
router.patch("/:id", patchNote);
router.delete("/bulk", deleteNotesBulk);
router.delete("/:id", deleteNote);

export default router;
