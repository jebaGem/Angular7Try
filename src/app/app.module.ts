import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './service/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from './store.module';

@NgModule({
	declarations: [ AppComponent, WeatherComponent ],
	imports: [ BrowserModule, HttpClientModule, StoreModule ],
	providers: [ WeatherService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
