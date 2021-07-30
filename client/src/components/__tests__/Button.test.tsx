import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Button, { PropsType } from '../Button';

it('renders without crashing', () =>
{
	const props: PropsType = {
		type: "button",
		color: "primary"
	};

	const div = document.createElement('div');
	ReactDOM.render(<Button {...props} />, div);
});

