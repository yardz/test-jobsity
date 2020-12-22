import React from 'react';
import { Reminder } from 'domains/remainder';
import { calendarActions, modalActions } from 'store/reducer';
import { useDispatch } from 'react-redux';
import { CalendarWeather } from './calendarWeather';
import dayjs from 'dayjs';

interface Props {
	reminder: Reminder;
	day: dayjs.Dayjs;
}
const style: React.CSSProperties = {
	float: 'right',
	textAlign: 'center',
	fontSize: 10,
	width: 24,
	height: 24,
	margin: '5px',
	background: 'transparent',
	borderRadius: '100px',
	border: '1px solid #000',
	position: 'relative',
	top: -24,
};
export const CalendarReminder: React.FC<Props> = ({ reminder, day }) => {
	const dispatch = useDispatch();

	return (
		<div style={{ width: '95%', margin: '5px auto', padding: '25px 5px 5px 5px', background: reminder.color }}>
			<button
				style={style}
				onClick={() => {
					dispatch(
						calendarActions.removeReminder({ month: Number(day.format('MM')), year: Number(day.format('YYYY')), reminderId: reminder.id }),
					);
				}}>
				x
			</button>
			<button
				style={style}
				onClick={() => {
					dispatch(
						modalActions.openReminder({ month: Number(day.format('MM')), year: Number(day.format('YYYY')), reminder: { ...reminder } }),
					);
				}}>
				i
			</button>

			<div>{reminder.text}</div>
			<div>{reminder.city}</div>
			{reminder.city && <CalendarWeather city={reminder.city} />}
		</div>
	);
};
