import { act, cleanup, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { renderPage } from 'test-utils';
import { ReminderModal } from './reminderModal';
import userEvent from '@testing-library/user-event';
import { modalActions } from 'store/reducer';

const reminder = { city: 'Belo Horizonte', color: '#fd50aa', day: 21, id: '123', text: 'The printing and typesetting', time: '16:35' };

describe('reminderModal', () => {
	afterEach(() => {
		jest.resetAllMocks();
		cleanup();
	});

	it('should add the reminder correctly', async () => {
		const { store } = renderPage(<ReminderModal />);

		store.dispatch(
			modalActions.openReminder({ month: 12, year: 2020, reminder: { city: '', color: '', text: '', time: '', day: 21, id: '123' } }),
		);

		await act(async () => {
			await userEvent.type(screen.getByTestId('text'), reminder.text);
			await userEvent.type(screen.getByTestId('city'), reminder.city);
			await userEvent.type(screen.getByTestId('color'), reminder.color);
			await userEvent.type(screen.getByTestId('time'), reminder.time);
			expect(store.getState().calendar.reminders?.[2020]?.[12]).toEqual(undefined);
			fireEvent.click(screen.getByTestId('submit-reminder'));
		});

		expect(store.getState().calendar.reminders[2020][12]).toEqual([reminder]);
	});

	it('should not add the reminder when it has no text', async () => {
		const { store } = renderPage(<ReminderModal />);

		store.dispatch(
			modalActions.openReminder({ month: 12, year: 2020, reminder: { city: '', color: '', text: '', time: '', day: 21, id: '123' } }),
		);

		await act(async () => {
			await userEvent.type(screen.getByTestId('city'), reminder.city);
			await userEvent.type(screen.getByTestId('color'), reminder.color);
			await userEvent.type(screen.getByTestId('time'), reminder.time);
			expect(store.getState().calendar.reminders?.[2020]?.[12]).toEqual(undefined);
			fireEvent.click(screen.getByTestId('submit-reminder'));
		});

		expect(store.getState().calendar.reminders?.[2020]?.[12]).toEqual(undefined);
	});

	it('should not add a reminder when it is longer than 30 characters', async () => {
		const { store } = renderPage(<ReminderModal />);

		store.dispatch(
			modalActions.openReminder({ month: 12, year: 2020, reminder: { city: '', color: '', text: '', time: '', day: 21, id: '123' } }),
		);

		await act(async () => {
			await userEvent.type(screen.getByTestId('text'), 'this reminder is tooooooooooooooo long');
			await userEvent.type(screen.getByTestId('city'), reminder.city);
			await userEvent.type(screen.getByTestId('color'), reminder.color);
			await userEvent.type(screen.getByTestId('time'), reminder.time);
			expect(store.getState().calendar.reminders?.[2020]?.[12]).toEqual(undefined);
			fireEvent.click(screen.getByTestId('submit-reminder'));
		});

		expect(store.getState().calendar.reminders?.[2020]?.[12]).toEqual(undefined);
	});
});
