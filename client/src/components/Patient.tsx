import React from 'react'
import styled from 'styled-components';
import Card from './Card';
import Button from './Button';
import { PatientType } from '../Types';

type PropsType = PatientType & {
	key?: number
};

export default function Patient({ name, email, phone }: PropsType)
{
	const editHandler = (e: React.MouseEvent<HTMLButtonElement>) =>
	{
		console.log("edit");

	}

	const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) =>
	{
		console.log("del");

	}



	return (
		<Card>
			<Table>
				<tbody>
					<tr>
						<th>Name : </th>
						<td>{name}</td>
					</tr>

					<tr>
						<th>Email : </th>
						<td>{email}</td>
					</tr>
					<tr>
						<th>Phone : </th>
						<td>{phone}</td>
					</tr>
				</tbody>
			</Table>


			<Actions>
				<Button type="button" color="warning" onClick={editHandler}>Edit</Button>
				<Button type="button" color="danger" onClick={deleteHandler}>Delete</Button>
			</Actions>

		</Card>
	)
}

const Table = styled.table`
	caption-side: bottom;
    border-collapse: collapse;
	width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    vertical-align: top;
    border-color: #dee2e6;
`;

const Actions = styled.div`

	display: flex;
	justify-content: space-between;
	width: 100%;
	
`;


