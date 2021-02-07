import React, { ReactElement } from 'react';
import { Rate } from '../consts/types';
import RateItem from './RateItem';

interface RatesProps {
    data: Rate[];
    sort: string;
}

const RatesList: React.FunctionComponent<RatesProps> = (props: RatesProps): ReactElement => {

    return (
        <div>
            { props.data.map((item: Rate, index: number) => (
                <RateItem key={index} item={item}></RateItem>
            )
            )}
        </div>
    )
}

export default RatesList;
