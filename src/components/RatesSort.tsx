import React, { ReactElement } from 'react';

interface SortProps {
    sortRates: (value: string) => void,
}

const RatesSort: React.FunctionComponent<SortProps> = (props: SortProps): ReactElement => {
    const [sortBy, setSortBy] = React.useState("");

    const handleSortByUpdate = (event: React.ChangeEvent<{value: string}>): void => {
        const sortValue = event.target.value;
        setSortBy(sortValue);
        props.sortRates(sortValue);
    }
    
    return (
        <div className="column-50 text-right">
            <select value={sortBy} onChange={handleSortByUpdate}>
                <option value="">Sort By</option>
                <option value="price">Price</option>
                <option value="duration">Duration</option>
                <option value="pickupDate">Pickup Date</option>
            </select>
        </div>
    )
}

export default RatesSort;
