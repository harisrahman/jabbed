import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Input, { PropsType } from '../Input';

it('renders without crashing', () =>
{
	const props: PropsType = {
		title: "Name",
		name: "email"
	};

	const div = document.createElement('div');
	ReactDOM.render(<Input {...props} />, div);
});
