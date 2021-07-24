import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
	name: String,
	dob: String,
	email: String,
	mobile: String,
	picture: String,
	createdAt: {
		type: Date,
		default: new Date()
	}
});

const Patient = mongoose.model("patients", patientSchema);

export default Patient;
