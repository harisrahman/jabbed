import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import patientRoutes from "./routes/patients.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({
	limit: '30mb',
	extended: true
}));
app.use(cors());


app.use("/patients", patientRoutes);


const CONNECTION_STRING = "mongodb://localhost:27017/jabbed";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Sever running on port: ${PORT}`)))
	.catch((error) => console.log(error))

mongoose.set("useFindAndModify", false);