import express from "express";
import verifyToken from '../middleware/verifyToken.js';
import { getNotes, getNotesById, createNotes, updateNotes, deleteNotes } from "../controller/notescontroller.js";

const router = express.Router();

// Terapkan verifyToken di semua routes notes
router.get("/all", verifyToken, getNotes);
router.get("/all/:id", verifyToken, getNotesById);
router.post("/tambah-notes", verifyToken, createNotes);
router.put("/update-notes/:id", verifyToken, updateNotes);
router.delete("/delete-notes/:id", verifyToken, deleteNotes);

export default router;