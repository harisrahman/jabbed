import React from 'react';
import styled from 'styled-components';
import VaccineForm from './components/VaccineForm';
import Patients from './components/Patients';

function App()
{
	return (
		<Root>
			<VaccineForm />
			<Patients />
		</Root>
	);
}

const Root = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

`;

export default App;
