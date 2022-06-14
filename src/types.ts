/***************************************
// Response types for external API calls
***************************************/

export type HebCalResponseType = {
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

export type OpenweatherResponseType = {
    zip: string,
    name: string,
    lat: number,
    lon: number,
    country: string
};

export type SunriseSunsetResponseType = {
    results: SunriseSunsetResultsType,
    status: string
};

export type SunriseSunsetResultsType = {
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