import express from "express";
import { getNotes, getNotesById,createNotes, updateNotes, deleteNotes} from "../controller/notescontroller.js";

const router = express.Router();

router.get("/notes", getNotes);
router.get("/notes/:id", getNotesById);
router.post("/tambah-notes", createNotes);
router.put("/update-notes/:id", updateNotes);
router.delete("/delete-notes/:id", deleteNotes);

export default router;
