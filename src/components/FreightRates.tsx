import React, { ReactElement } from 'react';
import RatesSearch from './RatesSearch';
import RatesList from './RatesList';
import RatesSort from './RatesSort';
import { ratesData } from '../consts/data';
import { getRatesSearchResults, getSortedRates } from '../utils'

const FreightRates: React.FunctionComponent = (): ReactElement => {
    const data = ratesData;
    const [filteredData, setFilteredData] = React.useState(ratesData);
    const [sort, setSort] = React.useState("");

    const searchRates = (searchBy: string, searchValue: string): void => {
        let filteredData = data;
        
        if(searchBy !== "") {
            filteredData = getRatesSearchResults(data, searchBy, searchValue);
        }

        setFilteredData(filteredData);
    }

    const sortRates = (sortBy: string): void => {
        setSort(sortBy);
        const sortedData = getSortedRates(filteredData, sortBy);
        setFilteredData(sortedData);
    }
    
    return (
        <div>
            <h1>Freight Rates</h1>
            <div className="container">
                <RatesSearch searchRates={searchRates}></RatesSearch>
                <RatesSort sortRates={sortRates}></RatesSort>
            </div>
            <RatesList data={filteredData} sort={sort}></RatesList>
        </div>
    )
}

export default FreightRates;
