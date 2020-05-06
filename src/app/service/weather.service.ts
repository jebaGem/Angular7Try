import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};
@Injectable()
export class WeatherService {
	header: { headers: HttpHeaders };

	private url = 'https://api.openweathermap.org/data/2.5/weather?q=';
	appId = 'a849387715c2e3535a4af369b56d854f';

	constructor(private http: HttpClient) {}
	private extractData(res: Response) {
		let body = res;
		console.log(body);
		return body || {};
	}
	public getCustomerById(city) {
		let urll = this.url + city + '&appid=' + this.appId;
		return this.http.get(`${urll}`);
	}
	getWeatherReports(city): Observable<any> {
		let urll = this.url + city + '&appid=' + this.appId;
		return this.http.get<any>(urll, { observe: 'response' }).pipe(
			tap((res) => {
				console.log(res);
			})
		);
	}
}
