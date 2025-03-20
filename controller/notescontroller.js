import notes from "../model/notesmodel.js";

//function ngambil semua data dari db
export const getNotes = async (req, res) => {
    try {
        const data = await notes.findAll();
        res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
    }
};

//function ngambil data berdasarkan id
export const getNotesById = async (req, res) => {
    try {
        const data = await notes.findOne({ where: { id: req.params.id } });
        if(data === null){
            res.status(404).json({ message: "Data tidak ditemukan" });
        }
        res.status(200).json(data);
    }
    catch (error) {
        console.log(error.message);
    }
};

//create notes
export const createNotes = async (req, res) => {
    try {
        await notes.create(req.body);
        res.status(200).json({ message: "Data berhasil ditambahkan" });
    } catch (error) {
        console.log(error.message);
    }
};

//update notes
export const updateNotes = async (req, res) => {
    try {
        //await notes.update(req.body);
        if( await notes.findOne({ where: { id: req.params.id } }) === null){
            res.status(404).json({ message: "Data tidak ditemukan" });
        }
        const inputData = req.body //simpen input
        const id = req.params.id //simpen id
        await notes.update(inputData, { where: { id: id } });
        res.status(200).json({ message: "Data berhasil diupdate" });
    } catch (error) {
        console.log(error.message);
    }
}

//delete notes
export const deleteNotes = async (req, res) => {
    try {
        if( await notes.findOne({ where: { id: req.params.id } }) === null){
            res.status(404).json({ message: "Data tidak ditemukan" });
        }
        const id = req.params.id;
        await notes.destroy({ where: { id: id } });
        res.status(200).json({ message: "Data berhasil dihapus" });
    } catch (error) {
        console.log(error.message);
    }
}