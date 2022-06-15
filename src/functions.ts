import {
    HebCalResponseType,
    OpenweatherResponseType,
    SunriseSunsetResponseType,
    SunriseSunsetResultsType
} from "./types"

const zipcode_to_timezone = require( 'zipcode-to-timezone' );

/***************************************
// helper function definitions
***************************************/

export function zipToLatLong(zip: string): number[] {
    // Get lat / long for a zip code
    return [0, 0];
};

export function getSunsetTime(
    year: number, 
    month: number, 
    day: number, 
    zip: string): SunriseSunsetResultsType {
    // Get sunset time for a given date and zip code
    const foo: SunriseSunsetResultsType =  {
        "sunrise": "5:55:44 AM",
        "sunset": "6:05:16 PM",
        "solar_noon": "12:00:30 PM",
        "day_length": "12:09:32",
        "civil_twilight_begin": "5:34:21 AM",
        "civil_twilight_end": "6:26:39 PM",
        "nautical_twilight_begin": "5:08:10 AM",
        "nautical_twilight_end": "6:52:51 PM",
        "astronomical_twilight_begin": "4:41:51 AM",
        "astronomical_twilight_end": "7:19:09 PM"
    };
    return foo;
};

export function isBeforeSunset(    
    year: number, 
    month: number, 
    day: number, 
    hour: number, 
    minute: number,
    second: number,
    meridian: string, 
    zip: string): boolean {
    // Check whether a time is before sunset on a given date in a given zip code
    return false;
};

export async function request(url: string): Promise<HebCalResponseType | OpenweatherResponseType | SunriseSunsetResponseType> {
    // Make a request of one of our three external apis
    const jsonResult: Promise<HebCalResponseType | OpenweatherResponseType | SunriseSunsetResponseType> = await (await fetch(url)).json();
    return jsonResult;
};
