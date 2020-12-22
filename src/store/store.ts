import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { calendarSlice, modalSlice } from './reducer';

export const reducers = combineReducers({
	calendar: calendarSlice.reducer,
	modal: modalSlice.reducer,
});

export const store = configureStore({
	reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
