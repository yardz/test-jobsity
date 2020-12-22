import React from 'react';
import { Row, Col } from 'react-bootstrap';
import dayjs from 'dayjs';
import { CalendarDay } from './calendarDay';

interface Props {
	start: dayjs.Dayjs;
}

export const CalendarWeek: React.FC<Props> = ({ start }) => {
	return (
		<Row noGutters>
			<Col>
				<CalendarDay day={start} />
			</Col>
			<Col>
				<CalendarDay day={start.add(1, 'day')} />
			</Col>
			<Col>
				<CalendarDay day={start.add(2, 'day')} />
			</Col>
			<Col>
				<CalendarDay day={start.add(3, 'day')} />
			</Col>
			<Col>
				<CalendarDay day={start.add(4, 'day')} />
			</Col>
			<Col>
				<CalendarDay day={start.add(5, 'day')} />
			</Col>
			<Col>
				<CalendarDay day={start.add(6, 'day')} />
			</Col>
		</Row>
	);
};
