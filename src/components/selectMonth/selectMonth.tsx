import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calendarSelect, calendarActions } from 'store/reducer';
import { Container, Row, Col, Button } from 'react-bootstrap';

const getMonthName = (month: number) => {
	const date = new Date(new Date().getFullYear(), month - 1, 1); // 2009-11-10
	return date.toLocaleString('default', { month: 'long' });
};

export const SelectMonth: React.FC = () => {
	const month = useSelector(calendarSelect.selectMonth);
	const dispatch = useDispatch();

	const monthName = useMemo(() => getMonthName(month), [month]);

	return (
		<Container fluid style={{ marginTop: 30 }}>
			<Row className="text-center">
				<Col sm="2">
					<Button variant="info" disabled={month === 1} onClick={() => dispatch(calendarActions.setMonth(month - 1))}>
						-
					</Button>
				</Col>
				<Col>{monthName}</Col>
				<Col sm="2">
					<Button variant="info" disabled={month === 12} onClick={() => dispatch(calendarActions.setMonth(month + 1))}>
						+
					</Button>
				</Col>
			</Row>
		</Container>
	);
};
