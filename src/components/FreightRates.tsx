import React, { ReactElement } from 'react';
import RatesSearch from './RatesSearch';
import RatesList from './RatesList';
import RatesSort from './RatesSort';
import { ratesData } from '../consts/data';

const FreightRates: React.FunctionComponent = (): ReactElement => {
    const data = ratesData;
    const [filteredData, setFilteredData] = React.useState(ratesData);
    const [sort, setSort] = React.useState("");

    const searchRates = (searchBy: string, searchValue: string): void => {
        let filteredData = data;
        
        if(searchBy !== "") {
            switch(searchBy) {
                case "origin":
                    filteredData = data.filter((item) => (item.origin.toLowerCase() === searchValue.toLowerCase() ));
                    break;
                case "destination":
                    filteredData = data.filter((item) => (item.destination.toLowerCase() === searchValue.toLowerCase() ));
                    break;
                case "pickupDate":
                    filteredData = data.filter((item) => (item.pickupDate === searchValue));
                    break;
                case "freightMode":
                    console.log(searchValue)
                    filteredData = data.filter((item) => (item.freightModes.includes(searchValue)));
                    break;
            }
        }

        setFilteredData(filteredData);
    }

    const sortRates = (sortBy: string): void => {
        setSort(sortBy);
        let sortedData = filteredData;
        switch(sortBy) {
            case("price"):
                sortedData = filteredData.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
                break;
            case "duration":
                sortedData = filteredData.sort((a,b) => (a.duration > b.duration) ? 1 : ((b.duration > a.duration) ? -1 : 0));
                break;
            case "pickupDate":
                sortedData = filteredData.sort((a,b) => (a.pickupDate > b.pickupDate) ? 1 : ((b.pickupDate > a.pickupDate) ? -1 : 0));
                break;
        }
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
