import { WeatherActionKeys } from './weather.action';
import { cloneDeep } from 'lodash';
import { initialJokesState, IWeatherState } from './weather.state';

function storeWeatherState(state: IWeatherState, action): any {
	const clonedState = cloneDeep(state);
	const weather = action.payload;
	clonedState.weather = weather;
	return clonedState;
}

export function weatherReducer(state: IWeatherState = initialJokesState, action) {
	switch (action.type) {
		// success action types
		case WeatherActionKeys.GET_WEATHER_SUCCESS:
			return storeWeatherState(state, action);
		default:
			return state;
	}
}
