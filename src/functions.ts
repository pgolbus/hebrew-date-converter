
import {
    HebCalResponseType,
    OpenweatherResponseType,
    SunriseSunsetResponseType,
    SunriseSunsetResultsType
} from "./types"

//const zipcode_to_timezone = require( 'zipcode-to-timezone' );

/***************************************
// helper function definitions
***************************************/

export function zipToLatLong(zip: string): [number, number] {
    // Get lat / long for a zip code
    return [0, 0];
};

export function getSunsetTime(
    year: number, 
    month: number, 
    day: number, 
    zip: number): string {
    // Get sunset time for a given date and zip code
    function convertTZ(date: Date, tzString: string) {
        return date.toLocaleString("en-US", {timeZone: tzString});   
    }
    return "foo";
};

export function isBeforeSunset(    
    year: number, 
    month: number, 
    day: number, 
    hour: number, 
    minute: number,
    meridian: string, 
    zip: number): boolean {
    // Check whether a time is before sunset on a given date in a given zip code
    return true;
};

export async function request(url: string): Promise<HebCalResponseType | OpenweatherResponseType | SunriseSunsetResponseType> {
    // Make a request of one of our three external apis
    const jsonResult: Promise<HebCalResponseType | OpenweatherResponseType | SunriseSunsetResponseType> = (await fetch(url)).json();
    return jsonResult;
};
