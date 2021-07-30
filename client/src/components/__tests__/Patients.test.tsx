import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Patients from '../Patients';

it('renders without crashing', () =>
{
	const div = document.createElement('div');
	ReactDOM.render(<Patients />, div);
});
