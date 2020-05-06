import { Injectable } from '@angular/core';
import { WeatherEpic } from './weather/weather.epic';
import { combineEpics, createEpicMiddleware, Epic } from 'redux-observable';
const epicMiddleware = createEpicMiddleware();

@Injectable()
export class RootEpics {
	constructor(private initEpics: WeatherEpic) {}

	createEpics(): any {
		const epics = combineEpics(this.initEpics.getWeatherEpic);
		return epicMiddleware.run(epics);
	}
}
