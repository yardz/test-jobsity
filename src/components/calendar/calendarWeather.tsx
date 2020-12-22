import React from 'react';
import { getCityForecast } from 'services/getCityForecast';
import useSWR from 'swr';

interface Props {
	city: string;
}
export const CalendarWeather: React.FC<Props> = ({ city }) => {
	const { data, error } = useSWR(['getCityForecast', city], (_service, location) => getCityForecast(location));
	if (error || !data) return null;
	return <div>{data?.list?.[0]?.weather?.[0]?.main}</div>;
};
