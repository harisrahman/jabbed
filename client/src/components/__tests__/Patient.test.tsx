import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Patient, { PropsType } from '../Patient';

it('renders without crashing', () =>
{
	const props: PropsType = {
		name: "Xyz Abc",
		email: "xyz@gmail.com",
		phone: "5465644"
	};

	const div = document.createElement('div');
	ReactDOM.render(<Patient {...props} />, div);
});

