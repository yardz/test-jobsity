import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SelectYear } from './components/selectYear';
import { SelectMonth } from './components/selectMonth';
import { Calendar } from './components/calendar';
import { ReminderModal } from './components/reminderModal';

function App() {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<SelectYear />
					</Col>
				</Row>
				<Row>
					<Col>
						<SelectMonth />
					</Col>
				</Row>
				<Row>
					<Col>
						<Calendar />
					</Col>
				</Row>
			</Container>
			<ReminderModal />
		</>
	);
}

export default App;
