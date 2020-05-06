import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: [ './weather.component.scss' ]
})
export class WeatherComponent implements OnInit {
	constructor(private service: WeatherService) {
		//this.service.getProduct('London');
	}
	onChange(cityName) {
		this.service.getCustomerById(cityName).subscribe((data) => {
			console.log(data);
		});
	}
	ngOnInit() {}
}
