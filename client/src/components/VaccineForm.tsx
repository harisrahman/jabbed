import React, { useState } from 'react'
import styled from 'styled-components';
import Card from './Card';
import Input from './Input';
import Button from './Button';
import { PatientForm } from '../Types';

export default function VaccineForm()
{
	const [formData, setFormData] = useState<PatientForm>({
		name: "",
		email: "",
		phone: "",
		errors: ["name", "email", "phone"] // Intially these will have errors
	});

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) =>
	{
		e.preventDefault();

		if (formData.errors.length === 0)
		{
			console.log("asnj");

		}
	}

	return (
		<Card maxWidth="500px">
			<Center>
				<HeroText>Get Vaccinated</HeroText>
				<LeadText>Together we can defeat COVID-19</LeadText>
				<Form onSubmit={submitHandler} noValidate>
					<Input name="name" title="Name" minLength={2} maxLength={50} formState={[formData, setFormData]} />
					<Input name="email" title="Email" type="email" maxLength={150} formState={[formData, setFormData]} />
					<Input name="phone" title="Phone" minLength={10} maxLength={10} type="tel" formState={[formData, setFormData]} />
					<Button type="submit" color="primary" style={{ maxWidth: "250px" }}>Submit</Button>
				</Form>
			</Center>
		</Card>

	)
}

const Center = styled.div`
	text-align: center;
`;

const HeroText = styled.h4`
	font-size: 2.5rem;
	margin: 0;
`;

const LeadText = styled.p`
	color: #9CA3AF;
	margin: 0;
	font-size: 0.8rem;
`;


const Form = styled.form`
	padding: 2rem;

`;