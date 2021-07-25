import mongoose from 'mongoose';
import Patient from "../models/patient.js";

export const getPatients = async (req, res) =>
{
	try
	{
		const patients = await Patient.find();

		res.status(200).json(patients);
	}
	catch (error)
	{
		res.status(404).json({ message: error.message });
	}
}

export const createPatient = async (req, res) =>
{
	const patient = req.body;

	const newPatient = new Patient(patient);

	try
	{
		await newPatient.save();

		res.status(201).json(newPatient);
	}
	catch (error)
	{
		res.status(409).json({ message: error.message });
	}
}

export const updatePatient = async (req, res) =>
{
	const { id } = req.params;
	const { name, email, phone, _id } = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No patient with id: ${id}`);

	const updatedPatient = { name, email, phone, _id: id };

	await Patient.findByIdAndUpdate(id, updatedPatient, { new: true });

	res.json(updatedPatient);
}

export const deletePatient = async (req, res) =>
{
	const { id } = req.params;
	const patient = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No patient with id: ${id}`);

	try
	{
		await Patient.findByIdAndRemove(id);

		res.json({ message: "Patient deleted successfully." });
	}
	catch (error)
	{
		res.status(409).json({ message: error.message });
	}
}


