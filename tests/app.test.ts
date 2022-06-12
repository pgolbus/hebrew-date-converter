import {
    gregorianToHebrew,
    hebrewToGregorian,
    zipToLatLong,
    getSunsetTime,
    isBeforeSunset,
    request
} 
from "../src/app";

test('Get lat/long for Teaneck', () => {
    expect(zipToLatLong("07666")).toBe([40.8915, -74.0119]);
});