function gregorianToHebrew(
    year: number, 
    month: number, 
    day: number, 
    hour: number, 
    minute: number,
    meridian: string, 
    zip: number): string {
    // Take a gregorian date and convert to hebrew date being cognizant of sunset
    return "foo";
};

function hebrewToGregorian(
    year: number, 
    month: number, 
    day: number, 
    hour: number, 
    minute: number,
    meridian: string, 
    zip: number): string {
    // Take a hebrew date and convert to gregorian date being cognizant of sunset
    return "foo";
};

function zipToLatLong(zip: number): [number, number] {
    // Get lat / long for a zip code
    return [0, 0];
};

function getSunsetTime(
    year: number, 
    month: number, 
    day: number, 
    zip: number): string {
    // Get sunset time for a given date and zip code
    return "foo";
};

function isBeforeSunset(    
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

function request(url: string, callback: (any) => any): void {
    // Return the assumed JSON blob from an http request
    // I haven't figured out the signature of the callback yet
    return
};