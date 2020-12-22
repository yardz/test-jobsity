import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calendarActions, modalSelect, modalActions } from 'store/reducer';
import { Button, Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap-formik';
import { Reminder } from 'domains/remainder';
import { useFormikContext } from 'formik';
import * as Yup from 'yup';

const emptyReminder: Reminder = {
	id: '',
	city: '',
	color: '',
	text: '',
	time: '',
	day: 0,
};

const validationSchema = Yup.object().shape({
	city: Yup.string(),
	color: Yup.string(),
	text: Yup.string().max(30).required(),
});

const Submit = () => {
	const { submitForm } = useFormikContext();
	return (
		<Button variant="primary" data-testid="submit-reminder" onClick={() => submitForm()}>
			Save Changes
		</Button>
	);
};

export const ReminderModal: React.FC = () => {
	const { year, month, open, reminder } = useSelector(modalSelect.selectReminder);
	const dispatch = useDispatch();
	const close = () => dispatch(modalActions.closeModal({ modal: 'reminder' }));

	const initialValues: Reminder = { ...emptyReminder, ...reminder };
	return (
		<Form
			enableReinitialize
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={values => {
				dispatch(calendarActions.addReminder({ year, month, reminder: values as Reminder }));
				close();
			}}>
			<Modal show={open} onHide={close}>
				<Modal.Header closeButton>
					<Modal.Title>Reminder</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Input data-testid="text" name="text" label="Text" />
					<Form.Input data-testid="city" name="city" label="City" />
					<Form.Input data-testid="color" name="color" label="Color" />
					<Form.Input data-testid="time" name="time" type="time" label="Time" />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={close}>
						Close
					</Button>
					<Submit />
				</Modal.Footer>
			</Modal>
		</Form>
	);
};
