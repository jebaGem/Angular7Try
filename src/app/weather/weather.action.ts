import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

export enum WeatherActionKeys {
	GET_WEATHER = 'weather/GET_WEATHER',
	GET_WEATHER_SUCCESS = 'weather/GET_WEATHER_SUCCESS',
	GET_WEATHER_FAILED = 'weather/GET_WEATHER_FAILED'
}

export interface IGetJokesSuccess {
	type: WeatherActionKeys.GET_WEATHER_SUCCESS;
	payload: any;
}

export interface IGetJokesFailed {
	type: WeatherActionKeys.GET_WEATHER_FAILED;
}

@Injectable()
export class WeatherAcion {
	@dispatch()
	getWeatherDetails(city: string) {
		return {
			type: WeatherActionKeys.GET_WEATHER,
			payload: city
		};
	}
}
