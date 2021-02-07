import React, { ReactElement } from 'react';
import { Rate } from '../consts/types';
import './RateItem.css';

interface ItemProps {
    item: Rate;
}

const RatesItem: React.FunctionComponent<ItemProps> = (props: ItemProps): ReactElement => {
    
    return (
        <div className="rate-item">
            <p> From <b>{props.item.origin}</b> To <b>{props.item.destination}</b> </p>
            <p> Duration: {props.item.duration} </p>
            <p> Pickup Date: {props.item.pickupDate} </p>
            <p> Freight Modes: {props.item.freightModes.toString()} </p>
            <p> <b>${props.item.price}</b> </p>
        </div>
    )
}

export default RatesItem;
