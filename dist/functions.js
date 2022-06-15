var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.request = exports.isBeforeSunset = exports.getSunsetTime = exports.zipToLatLong = void 0;
    const zipcode_to_timezone = require('zipcode-to-timezone');
    /***************************************
    // helper function definitions
    ***************************************/
    function zipToLatLong(zip) {
        // Get lat / long for a zip code
        return [0, 0];
    }
    exports.zipToLatLong = zipToLatLong;
    ;
    function getSunsetTime(year, month, day, zip) {
        // Get sunset time for a given date and zip code
        const foo = {
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
    }
    exports.getSunsetTime = getSunsetTime;
    ;
    function isBeforeSunset(year, month, day, hour, minute, second, meridian, zip) {
        // Check whether a time is before sunset on a given date in a given zip code
        return false;
    }
    exports.isBeforeSunset = isBeforeSunset;
    ;
    function request(url) {
        return __awaiter(this, void 0, void 0, function* () {
            // Make a request of one of our three external apis
            const jsonResult = yield (yield fetch(url)).json();
            return jsonResult;
        });
    }
    exports.request = request;
    ;
});
