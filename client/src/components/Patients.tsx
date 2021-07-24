import React, { useEffect, useState } from 'react'
import { PatientType } from '../Types';
import Patient from './Patient';

export default function Patients()
{
	const [patients, setPatients] = useState<PatientType[]>([]);


	useEffect(() =>
	{

		fetch('http://localhost:5000/patients')
			.then((res) => res.json())
			.then((patients: PatientType[]) =>
			{
				// console.log(patients);

				setPatients(patients);
			})
			.catch((error) =>
			{
				console.log(error);
			})
	}, [])


	return (
		<div>
			{
				patients.map((patient: PatientType, index: number) =>
				{
					return (
						<Patient key={index} {...patient} />
					);

				})
			}
		</div>
	)
}
