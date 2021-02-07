const freightModes = [
    "Airways",
    "Railways",
    "Roadways",
    "Waterways",
]

const ratesData = [
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
        origin: "Jerusalem",
        destination: "New York",
        freightModes: ["Airways"],
        price: 2000,
        pickupDate: "2021-03-14",
        duration: 10,
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
        origin: "Dubai",
        destination: "Istanbul",
        freightModes: ["Roadways"],
        price: 1700,
        pickupDate: "2021-04-03",
        duration: 15,
    }
]

export {
    ratesData,
    freightModes,
}