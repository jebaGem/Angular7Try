import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { RootEpics } from './root.epics';
import { rootReducer } from './root.reducer';
import { WeatherEpic } from './weather/weather.epic';
import { createEpicMiddleware } from 'redux-observable';
import { initialJokesState } from './weather/weather.state';
const epicMiddleware = createEpicMiddleware();

@NgModule({
	imports: [ NgReduxModule ],
	providers: [ RootEpics, WeatherEpic ]
})
export class StoreModule {
	constructor(public store: NgRedux<{}>, private devTools: DevToolsExtension, private rootEpics: RootEpics) {
		const middelwares = [ epicMiddleware ];
		const devMiddelwares = [ ...middelwares ];
		const prodMiddelwares = [ ...middelwares ];
		store.configureStore(rootReducer, {}, [ createEpicMiddleware(this.rootEpics.createEpics()) ]);
	}
}
