interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}
export interface Forecast {
	cod: string;
	message: number;
	cnt: number;
	list: [
		{
			dt: number;
			main: {
				temp: number;
				feels_like: number;
				temp_min: number;
				temp_max: number;
				pressure: number;
				sea_level: number;
				grnd_level: number;
				humidity: number;
				temp_kf: number;
			};
			weather: Weather[];
			clouds: { all: number };
			wind: { speed: number; deg: number };
			visibility: number;
			pop: number;
			rain: any;
			sys: any;
			dt_txt: '2020-12-21 21:00:00';
		},
	];
	city: {
		id: number;
		name: string;
		coord: { lat: number; lon: number };
		country: string;
		population: number;
		timezone: number;
		sunrise: number;
		sunset: number;
	};
}
