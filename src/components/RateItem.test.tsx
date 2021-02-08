import React from 'react';
import renderer from 'react-test-renderer';
import RateItem from './RateItem';
import { ratesData } from '../consts/data';

test('renders correctly', () => {
    const component = renderer.create(<RateItem item={ratesData[0]} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
