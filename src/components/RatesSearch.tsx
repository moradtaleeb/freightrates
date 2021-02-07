import React, { ReactElement } from 'react';
import { freightModes } from '../consts/data';

interface SearchProps {
    searchRates: any,
}

const RatesSearch: React.FunctionComponent<SearchProps> = (props: SearchProps): ReactElement => {
    const [searchBy, setSearchBy] = React.useState("");
    const [origin, setOrigin] = React.useState("");
    const [destination, setDestination] = React.useState("");
    const [freightMode, setFreightMode] = React.useState("");
    const [pickupDate, setPickupDate] = React.useState("");

    const handleSearchByUpdate = (event: React.ChangeEvent<{ value: string }>): void => {
        setSearchBy(event.target.value);
    }

    const handleOriginUpdate = (event: React.ChangeEvent<{ value: string }>): void => {
        setOrigin(event.target.value);
    }

    const handleDestinationUpdate = (event: React.ChangeEvent<{ value: string }>): void => {
        setDestination(event.target.value);
    }

    const handleFreightModeUpdate = (event: React.ChangeEvent<{ value: string }>): void => {
        setFreightMode(event.target.value);
    }

    const handlePickupDateUpdate = (event: React.ChangeEvent<{ value: string }>): void => {
        setPickupDate(event.target.value);
    }

    const renderSearchInput = (param: string): ReactElement | string => {
        switch(param) {
            case 'origin':
                return <input type="text" name="origin" placeholder="Origin" value={origin} onChange={handleOriginUpdate}></input>;
            case 'destination':
                return <input type="text" name="destination" placeholder="Destination" value={destination} onChange={handleDestinationUpdate}></input>;
            case 'freightMode':
                return <select value={freightMode} onChange={handleFreightModeUpdate}>
                    <option key={0} value="">Select</option>
                    {
                        freightModes.map((mode: string, index: number) => (
                            <option key={index} value={mode}>{mode}</option>
                        ))
                    }
                </select>;
            case 'pickupDate':
                return <input type="date" placeholder="Date Picker" value={pickupDate} onChange={handlePickupDateUpdate}></input>;
            default:
                return '';
          }
    }

    const getSearchValue = (searchBy: string): string => {
        switch(searchBy) {
            case 'origin':
                return origin;
            case 'destination':
                return destination;
            case 'freightMode':
                return freightMode;
            case 'pickupDate':
                return pickupDate;
            default:
                return '';
        }
    }

    const handleSearchSubmit = (event: React.SyntheticEvent ): void => {
        event.preventDefault();
        const searchValue = getSearchValue(searchBy);
        if(searchBy !== "")
            props.searchRates(searchBy, searchValue);
    }

    const handleSearchReset = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        setSearchBy("");
        setOrigin("");
        setDestination("");
        setPickupDate("");
        props.searchRates("", "");
    }

    return (
        <div className="column-50">
            <form onSubmit={handleSearchSubmit}>
                <select value={searchBy} onChange={handleSearchByUpdate}>
                    <option value ="">Search By</option>
                    <option value="origin">Origin</option>
                    <option value="destination">Destination</option>
                    <option value="freightMode">Freigh Mode</option>
                    <option value="pickupDate">Pickup Date</option>
                </select>
                
                { renderSearchInput(searchBy) }

                <input type="submit" value="Search"></input>
                <input type="reset" value="Reset" onClick={handleSearchReset}></input>
                
            </form>
            
        </div>
    )
}

export default RatesSearch;
