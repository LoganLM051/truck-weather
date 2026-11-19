## Endpoint
https://api.open-meteo.com/v1/forecast  (Open-Meteo, GET)

## What I changed using the docs
I added ` &timezone=auto and & &wind_speed_unit=mph.
Before: https://api.open-meteo.com/v1/forecast?latitude=31.14352&longitude=-93.261&current=temperature_2m,wind_speed_10m&temperature_unit=fahrenheit
After: https://api.open-meteo.com/v1/forecast?latitude=31.14352&longitude=-93.261&timezone=auto&current=temperature_2m,wind_speed_10m&wind_speed_unit=mph&temperature_unit=fahrenheit

## Live site
https://loganlm051.github.io/truck-weather/
