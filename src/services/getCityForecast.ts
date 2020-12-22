import axios from 'axios';
import { Forecast } from 'domains/forecast';

export const getCityForecast = async (city: string) => {
	const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=${1}&APPID=${
		process.env.REACT_APP_OPENWEATHERMAP_API_KEY
	}`;
	const { data } = await axios.get<Forecast>(api);
	return data;
};
