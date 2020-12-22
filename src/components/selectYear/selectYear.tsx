import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calendarSelect, calendarActions } from 'store/reducer';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const SelectYear: React.FC = () => {
	const year = useSelector(calendarSelect.selectYear);
	const dispatch = useDispatch();
	return (
		<Container fluid style={{ marginTop: 30 }}>
			<Row className="text-center">
				<Col sm="2">
					<Button variant="info" onClick={() => dispatch(calendarActions.setYear(year - 1))}>
						-
					</Button>
				</Col>
				<Col>{year}</Col>
				<Col sm="2">
					<Button variant="info" onClick={() => dispatch(calendarActions.setYear(year + 1))}>
						+
					</Button>
				</Col>
			</Row>
		</Container>
	);
};
