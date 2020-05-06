import { Injectable } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { WeatherActionKeys } from './weather.action';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import { isNil } from 'lodash';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class WeatherEpic {
	constructor(private service: WeatherService) {}

	getWeatherEpic: any = (action$, store: any): Observable<any> => {
		return (
			action$
				.ofType(WeatherActionKeys.GET_WEATHER)
				//.filter(() => isNil(store.getState().frontMenJokesReducer.jokes))
				.mergeMap((action) => {
					const payload = action.payload;
					const jokesRequest = this.service.getWeatherReports(payload);
					return (
						jokesRequest.pipe(
							map((result) => {
								return {
									type: WeatherActionKeys.GET_WEATHER_SUCCESS,
									payload: result
								};
							})
						),
						catchError((error) =>
							of<any>({
								type: WeatherActionKeys.GET_WEATHER_FAILED
							})
						)
					);
				})
		);
	};
}
