import { 
    HebCalResponseType,
    OpenweatherResponseType,
    SunriseSunsetResponseType,
    SunriseSunsetResultsType,
} from "./src/types";

import { request } from "./src/functions";


async function response(promise: (Promise<HebCalResponseType | OpenweatherResponseType | SunriseSunsetResponseType>),
    callback: (promise: (HebCalResponseType | OpenweatherResponseType | SunriseSunsetResponseType)) => any) {
        const msg: ( HebCalResponseType | OpenweatherResponseType | SunriseSunsetResponseType ) =  await promise
        .then(response => { return response;  }, 
            error => { throw error; })
        return callback(msg);
};
 
function updateElement(msg: ( HebCalResponseType | OpenweatherResponseType | SunriseSunsetResponseType )): void {
    const result: SunriseSunsetResultsType = (msg as SunriseSunsetResponseType).results;
    document.body.textContent = JSON.stringify(msg);
}
 
function main(): void {
    const lat: number = 40.8915;
    const lng: number = -74.0119;
    const date: string = "2012-11-09";
    const url: string = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${date}&formatted=0`;
    const promise: Promise<HebCalResponseType | OpenweatherResponseType | SunriseSunsetResponseType> = request(url);
    try {
        response(promise, updateElement);
    } catch (error) {
        console.log(`Failed to load ${url} with error ${error}`);
    };
};

main();