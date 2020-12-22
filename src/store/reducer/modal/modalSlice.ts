import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Reminder } from 'domains/remainder';
import {
	// AppThunk,
	RootState,
} from '../../store';

type ModalOptions = 'reminder';

interface ModalState {
	reminder: { open: boolean; reminder?: Reminder; year: number; month: number };
}

const initialState: ModalState = {
	reminder: { open: false, reminder: undefined, year: 0, month: 0 },
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		closeModal: (state, action: PayloadAction<{ modal: ModalOptions }>) => {
			if (action.payload.modal === 'reminder') {
				state.reminder = { ...initialState.reminder };
			}
		},
		openReminder: (state, action: PayloadAction<{ reminder: Reminder; year: number; month: number }>) => {
			state.reminder = { ...action.payload, open: true };
		},
	},
});

export const modalActions = {
	...modalSlice.actions,
};

export const modalSelect = {
	selectReminder: (state: RootState) => state.modal.reminder,
};
