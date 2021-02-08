import React from 'react';
import renderer from 'react-test-renderer';
import RatesSort from './RatesSort';

test('renders correctly', () => {
    const component = renderer.create(<RatesSort sortRates="" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
