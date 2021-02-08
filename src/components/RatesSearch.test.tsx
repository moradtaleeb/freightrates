import React from 'react';
import renderer from 'react-test-renderer';
import RatesSearch from './RatesSearch';

test('renders correctly', () => {
    const component = renderer.create(<RatesSearch searchRates={(): void => {}} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
