/***************************************
// Response types for external API calls
***************************************/

type HebCalResponseType = {
    gy: number,
    gm: number,
    gd: number,
    afterSunset: boolean,
    hy: number,
    hm: string,
    hd: number,
    hebrew: string,
    heDateParts: string[],
    events: string[]
  }

type OpenweatherResponseType = {
    zip: string,
    name: string,
    lat: number,
    lon: number,
    country: string
};

type SunriseSunsetResultsType = {
    sunrise: string,
    sunset: string,
    solar_noon: string,
    day_length: string,
    civil_twilight_begin: string,
    civil_twilight_end: string,
    nautical_twilight_begin: string,
    nautical_twilight_end: string,
    astronomical_twilight_begin: string,
    astronomical_twilight_end: string
};

type SunriseSunsetReturnType = {
    results: SunriseSunsetResultsType,
    status: string
};

/***************************************
// function definitions
// Note that we need to export all of them for unit testing purposes
***************************************/

export function gregorianToHebrew(
    year: number, 
    month: number, 
    day: number, 
    hour: number, 
    minute: number,
    meridian: string, 
    zip: string): string {
    // Take a gregorian date and convert to hebrew date being cognizant of sunset
    return "foo";
};

export function hebrewToGregorian(
    year: number, 
    month: number, 
    day: number, 
    hour: number, 
    minute: number,
    meridian: string, 
    zip: string): string {
    // Take a hebrew date and convert to gregorian date being cognizant of sunset
    return "foo";
};

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

export function request(url: string): (HebCalResponseType | OpenweatherResponseType | SunriseSunsetReturnType) {
    // Make a request of one of our three external apis
    let teaneck: OpenweatherResponseType = {
        zip: "07666",
        name: "Teaneck Township",
        lat: 40.8915,
        lon: -74.0119,
        country: "US"
    };
    return teaneck;
};