import { ratesData } from './consts/data';
import { getRatesSearchResults, getSortedRates } from './utils';

test('search data', () => {
    const searchResult = getRatesSearchResults(ratesData, "origin", "Jerusalem");
    const expectedResult = [
        {
            origin: "Jerusalem",
            destination: "New York",
            freightModes: ["Airways"],
            price: 2000,
            pickupDate: "2021-03-14",
            duration: 10,
        }
    ]
    expect(searchResult).toEqual(expectedResult);

    const searchResult2 = getRatesSearchResults(ratesData, "destination", "Istanbul");
    const expectedResult2 = [
        {
            origin: "Dubai",
            destination: "Istanbul",
            freightModes: ["Roadways"],
            price: 1700,
            pickupDate: "2021-04-03",
            duration: 15,
        }
    ]
    expect(searchResult2).toEqual(expectedResult2);

    const searchResult3 = getRatesSearchResults(ratesData, "freightMode", "Waterways");
    const expectedResult3 = [
        {
            origin: "New York",
            destination: "Casablanca",
            freightModes: ["Waterways"],
            price: 1000,
            pickupDate: "2021-04-04",
            duration: 22,
        },
        {
            origin: "Dubai",
            destination: "Rome",
            freightModes: ["Airways", "Waterways"],
            price: 1750,
            pickupDate: "2021-04-02",
            duration: 20,
        },
    ]
    expect(searchResult3).toEqual(expectedResult3);
});

test("sort data", () => {
    const sortedResult = getSortedRates(ratesData, "price");
    
    const expectedResult = [
        {
            origin: "New York",
            destination: "Casablanca",
            freightModes: ["Waterways"],
            price: 1000,
            pickupDate: "2021-04-04",
            duration: 22,
        },
        {
            origin: "New York",
            destination: "Dubai",
            freightModes: ["Airways"],
            price: 1050,
            pickupDate: "2021-03-24",
            duration: 3,
        },
        {
            origin: "Dubai",
            destination: "Istanbul",
            freightModes: ["Roadways"],
            price: 1700,
            pickupDate: "2021-04-03",
            duration: 15,
        },
        {
            origin: "Dubai",
            destination: "Rome",
            freightModes: ["Airways", "Waterways"],
            price: 1750,
            pickupDate: "2021-04-02",
            duration: 20,
        },
        {
            origin: "Jerusalem",
            destination: "New York",
            freightModes: ["Airways"],
            price: 2000,
            pickupDate: "2021-03-14",
            duration: 10,
        },
        
    ]
    expect(sortedResult).toEqual(expectedResult);

    const sortedResult2 = getSortedRates(ratesData, "duration");
    expect(sortedResult2).not.toBe(expectedResult);
});