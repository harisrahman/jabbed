import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Card from '../Card';

it('renders without crashing', () =>
{
	const div = document.createElement('div');
	const card = ReactDOM.render(<Card>Text</Card>, div);

	// expect(card)
});
