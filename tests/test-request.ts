import {
    HebCalResponseType, 
    OpenweatherResponseType,
    SunriseSunsetResponseType,
    request 
} from "../src/app";

let lat: number = 40.8915;
let lng: number = -74.0119;
let date: string = "2012-11-09";
let url: string = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${date}`;

const promise: Promise<HebCalResponseType | OpenweatherResponseType | SunriseSunsetResponseType> = request(url); 
promise.then(response => console.log(response), error => console.log(error.status));
