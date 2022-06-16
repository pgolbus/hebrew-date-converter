import {
    zipToLatLong,
    getSunsetTime,
    isBeforeSunset
}
from "../src/functions";

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