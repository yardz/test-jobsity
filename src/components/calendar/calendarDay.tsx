import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import { calendarActions, calendarSelect, modalActions } from 'store/reducer';
import { useSelector, useDispatch } from 'react-redux';
import { Reminder } from 'domains/remainder';
import { CalendarReminder } from './calendarReminder';
import { v4 as uuid } from 'uuid';

interface Props {
	day: dayjs.Dayjs;
}

const emptyReminder: Reminder = {
	id: '',
	city: '',
	color: '',
	text: '',
	time: '',
	day: 0,
};

export const CalendarDay: React.FC<Props> = ({ day }) => {
	const month = useSelector(calendarSelect.selectMonth);
	const year = useSelector(calendarSelect.selectYear);
	const monthReminders = useSelector(calendarSelect.selectReminders({ year, month }));
	const isCurrentMonth = Number(day.get('month')) + 1 === month;
	const isToday = day.isSame(dayjs(), 'day');
	const dispatch = useDispatch();

	const reminders = useMemo(() => {
		const today = monthReminders.filter(r => r.day === Number(day.format('DD')));
		today.sort((a, b) => {
			const timeA = day.set('hour', Number(a.time.split(':')[0])).set('minute', Number(a.time.split(':')[1]));
			const timeB = day.set('hour', Number(b.time.split(':')[0])).set('minute', Number(b.time.split(':')[1]));
			return timeA.diff(timeB);
		});
		return today;
	}, [monthReminders, day]);

	return (
		<div
			style={{
				border: '1px solid #000',
				padding: '10px',
				width: '100%',
				height: '100%',
				minHeight: 100,
				opacity: isCurrentMonth ? '1' : '0.7',
				marginTop: 10,
			}}>
			<div>
				<span
					style={{ background: isToday ? 'red' : '#ddd', cursor: isCurrentMonth ? 'pointer' : undefined, padding: 5, borderRadius: '100%' }}
					onClick={() =>
						isCurrentMonth &&
						dispatch(modalActions.openReminder({ month, year, reminder: { ...emptyReminder, id: uuid(), day: Number(day.format('DD')) } }))
					}>
					{day.format('DD')}
				</span>

				{reminders.length > 0 && (
					<span
						style={{ float: 'right', cursor: isCurrentMonth ? 'pointer' : undefined }}
						onClick={() => {
							if (!isCurrentMonth) {
								return;
							}
							reminders.forEach(({ id }) => dispatch(calendarActions.removeReminder({ month, year, reminderId: id })));
						}}>
						X
					</span>
				)}
			</div>

			{reminders.map(reminder => (
				<CalendarReminder key={reminder.id} reminder={reminder} day={day} />
			))}
		</div>
	);
};
