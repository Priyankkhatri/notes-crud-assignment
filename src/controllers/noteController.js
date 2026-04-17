import mongoose from "mongoose";
import Note from "../models/note.model.js";

// 1. POST /api/notes
export const createNote = async (req, res) => {
  try {
    const { title, content, category, isPinned } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required",
        data: null,
      });
    }

    const note = await Note.create({ title, content, category, isPinned });
    return res.status(201).json({
      success: true,
      message: "Note created successfully",
      data: note,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

// 2. POST /api/notes/bulk
export const createNotesBulk = async (req, res) => {
  try {
    const notes = req.body;

    if (!Array.isArray(notes) || notes.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body must be a non-empty array",
        data: null,
      });
    }

    for (const note of notes) {
      if (!note.title || !note.content) {
        return res.status(400).json({
          success: false,
          message: "All notes must have a title and content",
          data: null,
        });
      }
    }

    const createdNotes = await Note.insertMany(notes);
    return res.status(201).json({
      success: true,
      message: "Bulk notes created successfully",
      data: createdNotes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

// 3. GET /api/notes
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    return res.status(200).json({
      success: true,
      message: "Notes fetched successfully",
      data: notes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

// 4. GET /api/notes/:id
export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Note ID",
        data: null,
      });
    }

    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Note fetched successfully",
      data: note,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

// 5. PUT /api/notes/:id
export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Note ID",
        data: null,
      });
    }

    const updatedNote = await Note.findByIdAndUpdate(id, req.body, {
      new: true,
      overwrite: true,
      runValidators: true,
    });

    if (!updatedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Note updated successfully",
      data: updatedNote,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

// 6. PATCH /api/notes/:id
export const patchNote = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Note ID",
        data: null,
      });
    }

    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body cannot be empty",
        data: null,
      });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Note patched successfully",
      data: updatedNote,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

// 7. DELETE /api/notes/:id
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Note ID",
        data: null,
      });
    }

    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Note deleted successfully",
      data: deletedNote,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

// 8. DELETE /api/notes/bulk
export const deleteNotesBulk = async (req, res) => {
  try {
    const { ids } = req.body;

    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body must contain an array of IDs",
        data: null,
      });
    }

    for (const id of ids) {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          success: false,
          message: `Invalid ID found: ${id}`,
          data: null,
        });
      }
    }

    const result = await Note.deleteMany({ _id: { $in: ids } });

    return res.status(200).json({
      success: true,
      message: `${result.deletedCount} notes deleted successfully`,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};
