import express from "express";
import { getPatients, createPatient, updatePatient, deletePatient } from "../controllers/patients.js";

const router = express.Router();

router.get("/", getPatients);
router.post("/", createPatient);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

export default router;
