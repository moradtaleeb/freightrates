import { Rate } from './consts/types';

const getRatesSearchResults = (data: Rate[], searchBy: string, searchValue: string): Rate[] => {
    let filteredData = data;
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
            filteredData = data.filter((item) => (item.freightModes.includes(searchValue)));
            break;
    }
    return filteredData;
}

const getSortedRates = (filteredData: Rate[], sortBy: string): Rate[] => {
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
    return sortedData;
}

export {
    getRatesSearchResults,
    getSortedRates,
}
