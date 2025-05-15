import express from "express";
import verifyToken from '../middleware/verifyToken.js';
import { getNotes, getNotesById,createNotes, updateNotes, deleteNotes} from "../controller/notescontroller.js";

const router = express.Router();

router.get("/all", getNotes);
router.get("/all/:id",getNotesById);
router.post("/tambah-notes", createNotes);
router.put("/update-notes/:id", updateNotes);
router.delete("/delete-notes/:id", deleteNotes);

export default router;
