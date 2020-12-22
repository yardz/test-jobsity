import React from 'react';
import { useSelector } from 'react-redux';
import { calendarSelect } from 'store/reducer';
import { Container, Row, Col } from 'react-bootstrap';
import dayjs from 'dayjs';
import { CalendarWeek } from './calendarWeek';

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const Calendar: React.FC = () => {
	const year = useSelector(calendarSelect.selectYear);
	const month = useSelector(calendarSelect.selectMonth);

	const week01 = dayjs(`${year}-${month}-01`).startOf('week');
	const week02 = week01.endOf('week').add(1, 'day');
	const week03 = week02.endOf('week').add(1, 'day');
	const week04 = week03.endOf('week').add(1, 'day');
	const week05 = week04.endOf('week').add(1, 'day');
	const week06 = week05.endOf('week').add(1, 'day');

	const weeks = [week01, week02, week03, week04, week05, week06];

	return (
		<Container style={{ marginTop: 30 }} fluid>
			<Row className="text-center">
				{weekdays.map(day => (
					<Col key={day}>{day}</Col>
				))}
			</Row>
			{weeks.map((week, key) => (
				<CalendarWeek key={key} start={week} />
			))}
		</Container>
	);
};
