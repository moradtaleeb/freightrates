import React from 'react';
import renderer from 'react-test-renderer';
import RatesList from './RatesList';
import { ratesData } from '../consts/data';

test('renders correctly', () => {
    const component = renderer.create(<RatesList data={ratesData} sort="" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
