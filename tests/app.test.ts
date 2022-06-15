import {
    zipToLatLong,
    getSunsetTime,
    isBeforeSunset,
    request
} 
from "../src/functions";

import { apiKey } from "../openweather-api-key";

import { OpenweatherResponseType } from "../src/types";

const mockResponse: OpenweatherResponseType = {
    "zip": "07666",
    "name": "Teaneck Township",
    "lat": 40.8915,
    "lon": -74.0119,
    "country": "US"
};

global.fetch = jest.fn(() => 
    new Promise(() => 
    {
        json: () => new Promise(() => mockResponse)
    })
 ) as jest.Mock;

/***********************************************************
// Tests
************************************************************/


test("Get lat/long for Teaneck", () => {
    expect(zipToLatLong("07666")).toBe([40.8915, -74.0119]);
});

test("Get lat/long for Teaneck", () => {
    expect(zipToLatLong("07666")).toBe([40.8915, -74.0119]);
});

test("Get sunset time for Aaron's birthday in Teaneck", () => {
    expect(getSunsetTime(2012, 11, 9, "07666")).toBe({
        "sunrise": "11:35:27 AM",
        "sunset": "9:44:24 PM",
        "solar_noon": "4:39:56 PM",
        "day_length": "10:08:57",
        "civil_twilight_begin": "11:07:56 AM",
        "civil_twilight_end": "10:11:55 PM",
        "nautical_twilight_begin": "10:35:04 AM",
        "nautical_twilight_end": "10:44:47 PM",
        "astronomical_twilight_begin": "10:02:50 AM",
        "astronomical_twilight_end": "11:17:01 PM"
        })
});

test("Date should be before sunset", () => {
    const testDate: Date = new Date("2012-11-09 12:00:00PM EST")
    expect(isBeforeSunset(2012, 11, 9, 12, 0, 0, "PM", "07666")).toBe(true);
});

test("Let's make sure we can make a request", async () => {
    const zip: string = "07666";
    const country: string = "US";
    const requestApiKey: string = apiKey.apiKeyString;
    const url: string = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},${country}&appid=${requestApiKey}`

    // Why on earth does it say that requestResponse is an OpenweatherResponseType? Whatever, moving on
    const requestResponse: Promise<OpenweatherResponseType> = await (request(url) as Promise<OpenweatherResponseType>);
    //const requestResponse: any = await (request(url) as Promise<OpenweatherResponseType>);
    expect(requestResponse).toBe({
            "zip": "07666",
            "name": "Teaneck Township",
            "lat": 40.8915,
            "lon": -74.0119,
            "country": "US"
    })
});
