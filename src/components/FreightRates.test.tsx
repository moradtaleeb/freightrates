import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import FreightRates from './FreightRates';

test('renders correctly', () => {
    const component = renderer.create(<FreightRates />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders app title', () => {
    render(<FreightRates />);
    const appTitle = screen.getByText(/Freight Rates/i);
    expect(appTitle).toBeInTheDocument();
});
