import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Reminder } from 'domains/remainder';
import { RootState } from '../../store';

interface CalendarState {
	year: number;
	month: number;
	reminders: { [year: number]: { [month: number]: Reminder[] } };
}

const initialState: CalendarState = {
	year: new Date().getFullYear(),
	month: new Date().getMonth() + 1,
	reminders: {},

	// initial data for test
	// reminders: {
	// 	2020: {
	// 		12: [
	// 			{
	// 				id: '948b9e0a-fe6f-427e-820e-02862478cbd7',
	// 				city: 'Belo Horizonte',
	// 				color: '#ddd',
	// 				text: '01',
	// 				time: '16:40',
	// 				day: 21,
	// 			},
	// 			{
	// 				id: '948b9e0a-fe6f-427e-820e-02862478cbd9',
	// 				city: 'Belo Horizonte',
	// 				color: '#bacdef',
	// 				text: '02',
	// 				time: '12:45',
	// 				day: 21,
	// 			},
	// 			{
	// 				id: '948b9e0a-fe6f-427e-820e-02862478cbd1',
	// 				city: 'Belo Horizonte',
	// 				text: '03',
	// 				color: '#fd50aa',
	// 				time: '03:20',
	// 				day: 21,
	// 			},
	// 			{
	// 				id: '948b9e0a-fe6f-427e-820e-02862478cbd2',
	// 				text: '04',
	// 				city: 'Belo Horizonte',
	// 				color: '#fd50ff',
	// 				time: '03:18',
	// 				day: 21,
	// 			},
	// 		],
	// 	},
	// },
};

export const calendarSlice = createSlice({
	name: 'calendar',
	initialState,
	reducers: {
		setYear: (state, action: PayloadAction<number>) => {
			state.year = action.payload;
		},
		setMonth: (state, action: PayloadAction<number>) => {
			if (action.payload >= 1 && action.payload <= 12) {
				state.month = action.payload;
			}
		},
		addReminder: (state, action: PayloadAction<{ reminder: Reminder; year: number; month: number }>) => {
			if (!state.reminders[action.payload.year]) {
				state.reminders[action.payload.year] = {};
			}
			if (!state.reminders[action.payload.year][action.payload.month]) {
				state.reminders[action.payload.year][action.payload.month] = [];
			}
			const { reminder } = action.payload;
			const index = state.reminders[action.payload.year][action.payload.month].findIndex(i => i.id === reminder.id);
			if (index < 0) {
				state.reminders[action.payload.year][action.payload.month].push(reminder);
			} else {
				state.reminders[action.payload.year][action.payload.month][index] = reminder;
			}
		},
		removeReminder: (state, action: PayloadAction<{ reminderId: string; year: number; month: number }>) => {
			if (!state.reminders[action.payload.year]) {
				state.reminders[action.payload.year] = {};
			}
			if (!state.reminders[action.payload.year][action.payload.month]) {
				state.reminders[action.payload.year][action.payload.month] = [];
			}
			const { reminderId } = action.payload;
			const index = state.reminders[action.payload.year][action.payload.month].findIndex(i => i.id === reminderId);
			if (index >= 0) {
				state.reminders[action.payload.year][action.payload.month].splice(index, 1);
			}
		},
	},
});

export const calendarActions = {
	...calendarSlice.actions,
};

export const calendarSelect = {
	selectYear: (state: RootState) => state.calendar.year,
	selectMonth: (state: RootState) => state.calendar.month,
	selectReminders: ({ year, month }: { year: number; month: number }) => (state: RootState) =>
		state.calendar.reminders?.[year]?.[month] || [],
};
