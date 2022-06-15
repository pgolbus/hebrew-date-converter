# Hebrew Date Converter
Convert Hebrew dates to and from Gregorian in a given US zip code at a given time. Defaults to 1:00 AM in Teaneck, NJ.

### External APIs
* Sunrise: https://sunrise-sunset.org
* Geo location: http://api.openweathermap.org
* Hebrew date: https://www.hebcal.com

### NB: you will need to create an account with openweathermap.org to use this app

Create an account with openweathermap.org and then go [here](https://home.openweathermap.org/api_keys) to create an api key. Then copy your api key into `openweather-api-key.ts` as 

```
type apiKeyType = {
    "apiKeyString": string
};

export const apiKey: apiKeyType = {
    apiKeyString: "<your api key here>"
}; 
```

